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
import { gsap } from 'gsap';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.scss']
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef!: ElementRef;
  @Input() classes: string = '';
  @Input() nameDiv?: HTMLElement;
  @Input() nicknameDiv?: HTMLElement;
  @Input() rotationSpeed: number = 1;

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
  private object5!: THREE.Mesh

  private light1!: THREE.Light;
  private light2!: THREE.Light;
  private light3!: THREE.Light;

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
    this.camera.position.z = 6;

    // Создание рендера
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0x000000, 0.5);
    this.scene.add(directionalLight);

    // Добавление фигур
    this.addShapes();
  }

  private addShapes() {
    // Функция для создания материала с градиентом
    const createGradientMaterial = (color1: string, color2: string) => {
      return new THREE.ShaderMaterial({
        vertexColors: true,
        uniforms: {
          color1: { value: new THREE.Color(color1) },
          color2: { value: new THREE.Color(color2) },
          lightPosition: { value: new THREE.Vector3(5, 0, 0) },
        },
        vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;
                void main() {
                    vUv = uv;
                    vNormal = normalize(normalMatrix * normal);
                    vPosition = vec3(modelViewMatrix * vec4(position, 1.0));
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
        fragmentShader: `
                uniform vec3 color1;
                uniform vec3 color2;
                uniform vec3 lightPosition;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;
                void main() {
                    // Градиент
                    vec3 gradientColor = mix(color1, color2, vUv.y);

                    // Блик
                    vec3 lightDir = normalize(lightPosition - vPosition);
                    float dotNL = max(dot(vNormal, lightDir), 0.0);
                    vec3 specular = vec3(1.0) * pow(dotNL, 64.0);

                    gl_FragColor = vec4(gradientColor + specular, 0.7);
                }
            `,
        side: THREE.DoubleSide,
      });
    };

    // 1 фигура

    const geometry1 = new THREE.TorusGeometry(1, 0.5, 16, 100);
    const material1 = createGradientMaterial('#A8FF98', '#FFE598');

    this.object1 = new THREE.Mesh(geometry1, material1);
    this.object1.position.set(1, 3, 0);
    this.object1.castShadow = true;
    this.scene.add(this.object1);

    // 2 фигура
    const geometry2 = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material2 = createGradientMaterial('#FFADAD', '#FFE2A5');

    this.object2 = new THREE.Mesh(geometry2, material2);
    this.object2.position.set(5, 0, 0);
    this.object2.castShadow = true;
    this.scene.add(this.object2);

    // 3 фигура
    const geometry3 = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material3 = createGradientMaterial('#D1B8FF', '#95EFFF');
    this.object3 = new THREE.Mesh(geometry3, material3);
    this.object3.position.set(-6, 3, 0);
    this.object3.castShadow = true;
    this.scene.add(this.object3);

    // 4 фигура
    const geometry4 = new THREE.TorusGeometry(1, 0.5, 46, 80);
    const material4 = createGradientMaterial('#94FFDE', '#B7E9FF');
    this.object4 = new THREE.Mesh(geometry4, material4);
    this.object4.position.set(1, -3, 0);
    this.object4.castShadow = true;
    this.scene.add(this.object4);

    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 15);
    const material5 = createGradientMaterial('#fff200', '#745be5');
    this.object5 = new THREE.Mesh(geometry, material5);
    this.object5.position.set(-6, -2, 0);
    this.object5.castShadow = true;
    this.scene.add(this.object5);

    // Добавление точечных источников света для создания бликов
    this.light1 = new THREE.PointLight(0xfffccc, 1, 100);
    this.light1.position.set(5, 5, 5);
    this.scene.add(this.light1);

    this.light2 = new THREE.PointLight(0xfffccc, 1, 100);
    this.light2.position.set(-5, -5, -5);
    this.scene.add(this.light2);

    this.light3 = new THREE.PointLight(0xfffccc, 1, 100);
    this.light3.position.set(0, 5, -5);
    this.scene.add(this.light3);
  }

  private animate() {
    const container = this.canvasRef.nativeElement;

    // Проверка размеров контейнера
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.renderer.setSize(width, height);
    this.animationId = requestAnimationFrame(() => this.animate());

    this.object1.position.x += Math.sin(Date.now() * 0.001) * 0.0008;
    this.object1.position.y += Math.cos(Date.now() * 0.001) * 0.0008;

    this.object2.position.x += Math.cos(Date.now() * 0.001) * 0.0008;
    this.object2.position.y += Math.sin(Date.now() * 0.001) * 0.0008;

    this.object3.position.x += Math.sin(Date.now() * 0.001) * 0.0008;
    this.object3.position.y += Math.cos(Date.now() * 0.001) * 0.0008;

    this.object4.position.x += Math.cos(Date.now() * 0.001) * 0.0008;
    this.object4.position.y += Math.sin(Date.now() * 0.001) * 0.0008;

    this.object5.position.x += Math.cos(Date.now() * 0.001) * 0.0008;
    this.object5.position.y += Math.sin(Date.now() * 0.001) * 0.0008;

    this.object1.rotation.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object1.rotation.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.object2.rotation.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object2.rotation.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.object3.rotation.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object3.rotation.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.object4.rotation.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object4.rotation.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.object5.rotation.x += Math.cos(Date.now() * 0.001) * 0.0005;
    this.object5.rotation.y += Math.cos(Date.now() * 0.001) * 0.0005;

    this.renderer.render(this.scene, this.camera);
  }

  private moveObjectsToPosition(position: { x: number, y: number, z: number }): void {
    gsap.to(this.object1.position, { ...position, duration: 0.5 });
    gsap.to(this.object2.position, { ...position, duration: 0.5 });
    gsap.to(this.object3.position, { ...position, duration: 0.5 });
    gsap.to(this.object4.position, { ...position, duration: 0.5 });
    gsap.to(this.object5.position, { ...position, duration: 0.5 });
  }

  private rotateObjects(rotationSpeed: number): void {
    gsap.to(this.object1.rotation, { y: "+=6.28", repeat: -1, duration: rotationSpeed, ease: "linear" });
    gsap.to(this.object2.rotation, { y: "+=6.28", repeat: -1, duration: rotationSpeed, ease: "linear" });
    gsap.to(this.object3.rotation, { y: "+=6.28", repeat: -1, duration: rotationSpeed, ease: "linear" });
    gsap.to(this.object4.rotation, { y: "+=6.28", repeat: -1, duration: rotationSpeed, ease: "linear" });
    gsap.to(this.object5.rotation, { y: "+=6.28", repeat: -1, duration: rotationSpeed, ease: "linear" });
  }

  private addHoverListeners() {
    const topCenterPosition = {x: 0, y: 2, z: 0};
    const bottomCenterPosition = {x: 0, y: -2, z: 0};

    this.nameDiv?.addEventListener('mouseover', () => {
      this.moveObjectsToPosition(topCenterPosition);
      this.rotateObjects(this.rotationSpeed);
    });

    this.nicknameDiv?.addEventListener('mouseover', () => {
      this.moveObjectsToPosition(bottomCenterPosition);
      this.rotateObjects(this.rotationSpeed);
    });

    this.nameDiv?.addEventListener('mouseout', () => {
      gsap.to(this.object1.position, {x: 1, y: 3, z: 0, duration: 0.5});
      gsap.to(this.object2.position, {x: 5, y: 0, z: 0, duration: 0.5});
      gsap.to(this.object3.position, {x: -6, y: 3, z: 0, duration: 0.5});
      gsap.to(this.object4.position, {x: 1, y: -3, z: 0, duration: 0.5});
      gsap.to(this.object5.position, {x: -6, y: -2, z: 0, duration: 0.5});

      // Остановка вращения
      gsap.killTweensOf(this.object1.rotation);
      gsap.killTweensOf(this.object2.rotation);
      gsap.killTweensOf(this.object3.rotation);
      gsap.killTweensOf(this.object4.rotation);
      gsap.killTweensOf(this.object5.rotation);
    });
    this.nicknameDiv?.addEventListener('mouseout', () => {
      gsap.to(this.object1.position, {x: 1, y: 3, z: 0, duration: 0.5});
      gsap.to(this.object2.position, {x: 5, y: 0, z: 0, duration: 0.5});
      gsap.to(this.object3.position, {x: -6, y: 3, z: 0, duration: 0.5});
      gsap.to(this.object4.position, {x: 1, y: -3, z: 0, duration: 0.5});
      gsap.to(this.object5.position, {x: -6, y: -2, z: 0, duration: 0.5});

      // Остановка вращения
      gsap.killTweensOf(this.object1.rotation);
      gsap.killTweensOf(this.object2.rotation);
      gsap.killTweensOf(this.object3.rotation);
      gsap.killTweensOf(this.object4.rotation);
      gsap.killTweensOf(this.object5.rotation);
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
