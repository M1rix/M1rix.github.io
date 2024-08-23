import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import * as THREE from 'three';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.scss']
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef!: ElementRef;
  @Input() nameDiv!: HTMLElement;
  @Input() nicknameDiv!: HTMLElement;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private animationId!: number;
  private isBrowser: boolean;
  private mouseX = 0;
  private mouseY = 0;

  private object1!: THREE.Mesh;
  private object2!: THREE.Mesh;
  private object3!: THREE.Mesh;
  private object4!: THREE.Mesh;
  private object5!: THREE.Mesh;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initThreeJS();
      this.animate();
      this.addHoverListeners();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      cancelAnimationFrame(this.animationId);
      this.renderer.dispose();
    }
  }

  private initThreeJS() {
    const container = this.canvasRef.nativeElement;

    // Проверка размеров контейнера
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Создание сцены
    this.scene = new THREE.Scene();

    // Создание камеры
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Создание рендера
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);


    let light = new THREE.AmbientLight(0x404040); // soft white light
    this.scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xa8a8a8, 1);
    directionalLight.position.set(-7, 4, 2); // Позиция света (x, y, z)
    directionalLight.castShadow = true; // Включение отбрасывания теней для света
    directionalLight.shadow.mapSize.width = 1024; // Размер теневой карты
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5; // Ближняя и дальняя плоскости теневой карты
    directionalLight.shadow.camera.far = 500;
    this.scene.add(directionalLight);

    // Добавление фигур
    this.addShapes();
  }

  private addShapes() {
    // Функция для создания материала с градиентом
    const createGradientMaterial = (color1: string, color2: string) => {
      return new THREE.ShaderMaterial({
        uniforms: {
          color1: { value: new THREE.Color(color1) },
          color2: { value: new THREE.Color(color2) },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          void main() {
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,
        side: THREE.DoubleSide,
      });
    };

    // 1 фигура
    const geometry1 = new THREE.TorusGeometry(1, 0.5, 16, 100);
    const material1 = createGradientMaterial('rgba(255,165,105,0.6)', '#FFD700');
    this.object1 = new THREE.Mesh(geometry1, material1);
    this.object1.position.set(1, 3, 0);
    this.object1.castShadow = true;
    this.scene.add(this.object1);

    // 2 фигура
    const geometry2 = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material2 = createGradientMaterial('rgba(0,255,127,0.6)', 'rgba(138,43,226,0.6)');
    this.object2 = new THREE.Mesh(geometry2, material2);
    this.object2.position.set(5, -1, 0);
    this.object2.castShadow = true;
    this.scene.add(this.object2);

    // 3 фигура
    const geometry3 = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material3 = createGradientMaterial('rgba(0,255,127,0.6)', 'rgba(138,59,227,0.6)');
    this.object3 = new THREE.Mesh(geometry3, material3);
    this.object3.position.set(-8, 1, -4);
    this.object3.castShadow = true;
    this.scene.add(this.object3);

    // 1 фигура
    const geometry4 = new THREE.TorusGeometry(1, 0.5, 46, 80);
    const material4 = createGradientMaterial('rgba(255,165,105,0.6)', 'rgba(255,215,0,0.6)');
    this.object4 = new THREE.Mesh(geometry4, material4);
    this.object4.position.set(-6, -3, 0);
    this.object4.castShadow = true;
    this.scene.add(this.object4);

  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    this.object1.position.x += Math.sin(Date.now() * 0.001) * 0.0005;
    this.object1.position.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.object2.position.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object2.position.y += Math.sin(Date.now() * 0.001) * 0.0005;

    this.object3.position.x += Math.sin(Date.now() * 0.001) * 0.0005;
    this.object3.position.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.object4.position.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object4.position.y += Math.sin(Date.now() * 0.001) * 0.0005;

    this.renderer.render(this.scene, this.camera);
  }

  private addHoverListeners() {
    this.nameDiv.addEventListener('mouseover', () => {
    });

    this.nameDiv.addEventListener('mouseout', () => {
    });

    this.nicknameDiv.addEventListener('mouseover', () => {
    });

    this.nicknameDiv.addEventListener('mouseout', () => {
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
