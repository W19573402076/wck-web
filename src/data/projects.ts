export interface Project {
  slug: string;
  title: Record<"en" | "zh", string>;
  shortDescription: Record<"en" | "zh", string>;
  longDescription: Record<"en" | "zh", string>;
  techStack: string[];
  features: Record<"en" | "zh", string[]>;
  imageUrl: string;
  githubUrl?: string;
  giteeUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    slug: "mujoco-ball-simulation",
    title: {
      en: "MuJoCo Ball Simulation",
      zh: "MuJoCo 球体物理仿真",
    },
    shortDescription: {
      en: "Real-time rigid-body physics simulation with keyboard-controlled ball, rendered in GLFW with dynamic skybox.",
      zh: "基于 MuJoCo 的实时刚体物理仿真，键盘控制球体，GLFW 渲染，含动态天空盒。",
    },
    longDescription: {
      en: "An interactive real-time physics simulation built with MuJoCo and rendered via GLFW. Control a ball using keyboard (WASD + Space for movement/jump), rotate/zoom the camera with mouse, and toggle between free and follow-camera modes. Features a procedurally generated cloudy skybox and real-time HUD overlay showing speed, position, and control input states.",
      zh: "基于 MuJoCo 物理引擎和 GLFW 渲染的交互式实时物理仿真系统。通过键盘控制球体运动（WASD 移动 + 空格跳跃），鼠标旋转/缩放视角，可切换自由视角和跟随模式。内置程序化生成的云层天空盒，实时 HUD 显示速度、位置和控制输入状态。",
    },
    techStack: ["Python", "MuJoCo", "GLFW", "NumPy"],
    features: {
      en: [
        "Real-time rigid-body physics simulation",
        "WASD keyboard control with jump",
        "Mouse orbit/pan/zoom camera",
        "Procedural cloudy skybox generation",
        "HUD overlay with speed & position data",
        "Fullscreen & follow-camera modes",
      ],
      zh: [
        "实时刚体物理仿真",
        "WASD 键盘控制与跳跃",
        "鼠标旋转/平移/缩放视角",
        "程序化云层天空盒生成",
        "HUD 速度与位置数据显示",
        "全屏与跟随视角模式",
      ],
    },
    imageUrl: "/images/projects/mujoco-sim.svg",
    featured: true,
    year: 2025,
  },
  {
    slug: "mujoco-ball-remote",
    title: {
      en: "MuJoCo Ball Remote Control",
      zh: "MuJoCo 球体遥控系统",
    },
    shortDescription: {
      en: "ROS2 + STM32 joystick remote control for MuJoCo ball simulation with real-time feedback.",
      zh: "基于 ROS2 + STM32 物理摇杆的 MuJoCo 球体遥控系统，支持实时控制反馈。",
    },
    longDescription: {
      en: "A hardware-software integration system connecting a physical STM32-based joystick to the MuJoCo simulation via ROS2. The STM32 reads joystick position data and transmits it through serial communication. A ROS2 node receives and normalizes the joystick input, applying it as control force to the MuJoCo ball with deadzone handling and active braking when no input is detected.",
      zh: "一套软硬件集成系统，通过 ROS2 将基于 STM32 的物理摇杆连接到 MuJoCo 仿真环境。STM32 读取摇杆位置数据并通过串口传输，ROS2 节点接收并归一化摇杆输入，将其作为控制力施加到 MuJoCo 球体，支持死区处理和无输入时的主动刹车。",
    },
    techStack: ["ROS2", "STM32", "Python", "MuJoCo", "C"],
    features: {
      en: [
        "Physical joystick input via STM32",
        "ROS2 pub-sub communication layer",
        "Deadzone & active braking logic",
        "Real-time control feedback loop",
      ],
      zh: [
        "STM32 物理摇杆输入",
        "ROS2 发布-订阅通信层",
        "死区处理与主动刹车逻辑",
        "实时控制反馈回路",
      ],
    },
    imageUrl: "/images/projects/mujoco-remote.svg",
    featured: true,
    year: 2025,
  },
  {
    slug: "basic-framework-omniwheels",
    title: {
      en: "RM Omnidirectional Chassis — Image Transmission",
      zh: "RM 全向底盘 — 图传链路",
    },
    shortDescription: {
      en: "RoboMaster omnidirectional chassis control system with image transmission link, based on the YueLu basic_framework.",
      zh: "基于跃鹿战队 basic_framework 的 RoboMaster 全向底盘控制系统，集成图传链路。",
    },
    longDescription: {
      en: "An embedded control system for RoboMaster omnidirectional chassis based on the YueLu basic_framework. Implements Mecanum/omni wheel kinematics, motor control via CAN bus, and image transmission link for remote monitoring. Built on STM32F407 with FreeRTOS, featuring BSP hardware abstraction, module-level motor/driver encapsulation, and pub-sub message architecture for decoupled app communication.",
      zh: "基于跃鹿战队 basic_framework 的 RoboMaster 全向底盘嵌入式控制系统。实现麦克纳姆轮/全向轮运动学解算、CAN 总线电机控制、以及用于远程监控的图传链路。基于 STM32F407 + FreeRTOS，采用 BSP 硬件抽象、模块级电机/驱动封装和发布-订阅消息架构实现应用层解耦通信。",
    },
    techStack: ["C", "STM32F4", "FreeRTOS", "CAN Bus", "CMake"],
    features: {
      en: [
        "Mecanum & omni wheel kinematics",
        "CAN bus motor communication",
        "Image transmission link integration",
        "BSP-Module-App layered architecture",
        "FreeRTOS multi-task scheduling",
      ],
      zh: [
        "麦克纳姆轮 & 全向轮运动学",
        "CAN 总线电机通信",
        "图传链路集成",
        "BSP-Module-App 三层架构",
        "FreeRTOS 多任务调度",
      ],
    },
    imageUrl: "/images/projects/omniwheels.svg",
    giteeUrl: "https://gitee.com/eleven-w/projects",
    featured: true,
    year: 2025,
  },
  {
    slug: "hero-2026-image-transmission",
    title: {
      en: "RM Hero-2026 — Image Transmission",
      zh: "RM 英雄机器人-2026 — 图传链路",
    },
    shortDescription: {
      en: "RoboMaster Hero robot (2026) control system with image transmission, built on the YueLu basic_framework.",
      zh: "基于跃鹿战队 basic_framework 的 RoboMaster 英雄机器人 (2026) 控制系统，集成图传链路。",
    },
    longDescription: {
      en: "An embedded control system for the Hero robot (2026 season) based on the YueLu basic_framework. Includes gimbal control, shooting mechanism, and image transmission link. The architecture follows BSP-Module-App layering with pub-sub messaging between applications, supporting multi-board deployment via conditional compilation.",
      zh: "基于跃鹿战队 basic_framework 的英雄机器人 (2026赛季) 嵌入式控制系统。包含云台控制、射击机构和图传链路。架构遵循 BSP-Module-App 三层结构，应用间通过发布-订阅消息解耦，支持通过条件编译实现多板部署。",
    },
    techStack: ["C", "STM32F4", "FreeRTOS", "CAN Bus", "ARM-GCC"],
    features: {
      en: [
        "Gimbal yaw/pitch control",
        "Friction wheel shooting mechanism",
        "Image transmission link",
        "Multi-board conditional compilation",
        "Pub-sub message architecture",
      ],
      zh: [
        "云台偏航/俯仰控制",
        "摩擦轮射击机构",
        "图传链路集成",
        "多板条件编译部署",
        "发布-订阅消息架构",
      ],
    },
    imageUrl: "/images/projects/hero-2026.svg",
    giteeUrl: "https://gitee.com/eleven-w/projects",
    featured: false,
    year: 2026,
  },
];
