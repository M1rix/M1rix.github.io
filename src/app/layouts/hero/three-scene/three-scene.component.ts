import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject, Input,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrl: './three-scene.component.scss'
})
export class ThreeSceneComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef!: ElementRef;
  @Input() nameDiv!: HTMLElement;

  // Размеры сцены
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  controls!: OrbitControls;
  meshM!: THREE.Mesh;

  mouseX: number = 0;
  mouseY: number = 0;

  originalGeometry!: THREE.BufferGeometry;
  alternateGeometry!: THREE.BufferGeometry;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createScene();
    this.createLight();
    this.createAlternateGeometry();
    this.startRenderingLoop();
    this.addHoverListeners();
  }

  private createScene() {
    this.scene = new THREE.Scene();

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.z = 5;

    // Инициализация рендера
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setClearColor(0x000000, 0);

    // Инициализация OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Создание формы буквы "М"
    const shape = new THREE.Shape();
    shape.moveTo(-1, -1);
    shape.lineTo(-0.5, 1);
    shape.lineTo(0, 0);
    shape.lineTo(0.5, 1);
    shape.lineTo(1, -1);
    shape.lineTo(0.5, -1);
    shape.lineTo(0, 0);
    shape.lineTo(-0.5, -1);
    shape.lineTo(-1, -1);

    // Создание геометрии и материала
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.meshM = new THREE.Mesh(geometry, material);

    this.originalGeometry = geometry;

    this.scene.add(this.meshM);
  }

  private createLight() {
    let light = new THREE.AmbientLight(0x404040); // soft white light
    this.scene.add(light);
  }

  private startRenderingLoop() {
    let component: ThreeSceneComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.controls.update();

      // Обновление положения объекта в форме буквы "М" относительно курсора
      component.meshM.position.x = (component.mouseX / window.innerWidth) * 2 - 1;
      component.meshM.position.y = -(component.mouseY / window.innerHeight) * 2 + 1;

      component.renderer.render(component.scene, component.camera);
    }());
  }

  private getAspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private createAlternateGeometry() {
    // Пример другой формы (куб)
    const geometry = new THREE.BoxGeometry(1, 1, 3);
    this.alternateGeometry = geometry;
  }

  private addHoverListeners() {
    const hoverDiv = this.nameDiv;

    hoverDiv.addEventListener('mouseover', () => {
      this.meshM.geometry = this.alternateGeometry;
    });

    hoverDiv.addEventListener('mouseout', () => {
      this.meshM.geometry = this.originalGeometry;
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
