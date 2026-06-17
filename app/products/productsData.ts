const products = [
  {
    id: "product1",
    category: "Testing Platforms",
    title: "UAV Test Platform Complete Kit",
    shortDescription:
      "A comprehensive precision-engineered testing rig designed to analyze the performance of drone BLDC motors and propellers.",
    imageUrl: "/products/product1.jpg",
    longDescription:
      "The UAV Test Platform Complete Kit is a fully integrated experimental setup engineered to perform detailed performance analysis of Drone Brushless DC (BLDC) motors. It provides researchers, students, and engineers with all the necessary hardware and instrumentation to systematically study and analyze speed–torque, speed–power, and thrust characteristics of various propellers under dynamic operating conditions.",
    specifications: {
      controller: "ESP32 Microcontroller",
      speedController: "Electronic Speed Controller (ESC)",
      motorType: "Brushless DC (BLDC) Motor",
      energySensor: "Energy Sensor Module",
      powerSource: "Precision Power Supply",
      connectivity: "USB / Wi-Fi telemetry",
      measurement: "Integrated Optical Tachometer",
      software: "Arduino IDE (compatible codes included)"
    },
    quickSpecs: [
      { value: "ESP32", label: "Controller" },
      { value: "ESC Included", label: "Motor Control" },
      { value: "Tachometer", label: "RPM Tracking" },
      { value: "Arduino IDE", label: "Software" }
    ],
    features: [
      {
        iconName: "Cpu",
        title: "ESP32 Control Logic",
        description: "Equipped with a powerful ESP32 Microcontroller to manage system triggers, signal routing, and telemetry reporting.",
      },
      {
        iconName: "Zap",
        title: "ESC Power Regulation",
        description: "Includes an Electronic Speed Controller (ESC) to provide high-precision PWM speed control to the BLDC motor.",
      },
      {
        iconName: "Activity",
        title: "Energy Sensor Module",
        description: "Monitors voltage, current draw, and power consumption in real time for precise efficiency calculations.",
      },
      {
        iconName: "Sliders",
        title: "Dynamic Thrust Study",
        description: "Features a heavy-duty mounting frame for testing different propellers to map thrust against power and speed.",
      },
      {
        iconName: "Terminal",
        title: "Arduino Integration",
        description: "Arduino IDE compatible workspace for easy logging, firmware modifications, and sensor integration.",
      },
      {
        iconName: "Shield",
        title: "Power Supply & Wires",
        description: "Packaged with a reliable power supply unit and high-temp connecting wires for maximum test safety."
      }
    ],
    applications: [
      "BLDC Motor Efficiency Characterization",
      "Propeller Thrust & Lift Evaluation",
      "UAV Propulsion Design & Prototyping",
      "Academic Aerodynamics Laboratories"
    ]
  },
  {
    id: "product2",
    category: "Testing Platforms",
    title: "UAV Test Platform Core",
    shortDescription:
      "Essential core testing frame and electronics kit for custom UAV BLDC motor and propeller testing configurations.",
    imageUrl: "/products/product2.jpg",
    longDescription:
      "The UAV Test Platform Core is the foundational platform for conducting custom BLDC motor and propeller performance tests. It features the primary structural frame, core sensors, and motor mounts, enabling you to build and customize your own telemetry setups. Perfect for researchers who want to study speed-torque and thrust characteristics with their own customized controllers or power modules.",
    specifications: {
      controller: "ESP32 Compatible Mounting",
      speedController: "Electronic Speed Controller (ESC) Support",
      motorType: "Brushless DC (BLDC) Motor Mount",
      sensorSupport: "Energy Sensor Interface",
      powerSource: "External Power Supply Input",
      measurement: "Optical Tachometer bracket & basic sensor",
      propellerMount: "Standard multi-propeller adapter"
    },
    quickSpecs: [
      { value: "Modular", label: "Core Frame" },
      { value: "BLDC Mount", label: "Propulsion Setup" },
      { value: "Tachometer", label: "Speed Sensor" },
      { value: "Flexible", label: "Custom Tel." }
    ],
    features: [
      {
        iconName: "Sliders",
        title: "Modular Frame",
        description: "Strong, high-grade structural support structure with modular mounting interfaces for custom sensors.",
      },
      {
        iconName: "Cpu",
        title: "ESP32 Controller Mount",
        description: "Designed for easy integration of the ESP32 microcontroller or other custom data-logging processors.",
      },
      {
        iconName: "Zap",
        title: "ESC Speed Control",
        description: "Robust ESC mounting bracket and power lanes for standard 20A-40A brushless speed controllers.",
      },
      {
        iconName: "Activity",
        title: "Thrust & Power Characterization",
        description: "Calibrated mounting bracket to help study speed–torque, speed–power, and thrust of different propellers.",
      },
      {
        iconName: "Terminal",
        title: "Open Development",
        description: "Compatible with Arduino IDE codebases, allowing you to flash custom logging routines to study BLDC motors."
      }
    ],
    applications: [
      "Custom UAV Telemetry Testing",
      "Academic Research & Development",
      "Propeller & Motor Prototyping Labs",
      "DIY Drone Rigs Calibration"
    ]
  },
  {
    id: "product3",
    category: "Autonomous Robotics",
    title: "JetRacer Pro ROS AI Kit",
    shortDescription:
      "Next-Gen Autonomous Driving & SLAM Robotics Platform engineered for Edge AI, Computer Vision, and SLAM Navigation.",
    imageUrl: "/products/product3.jpg",
    longDescription:
      "Accelerate your AI robotics development with this high-performance, dual-controller autonomous racing kit. Engineered for cutting-edge Edge AI, Computer Vision, and SLAM Navigation, this platform delivers enterprise-grade processing in a compact, rugged design.",
    specifications: {
      aiEngine: "Jetson Nano Module (4GB RAM) + Custom IO Carrier Board",
      sensors: "360° RPLIDAR A1 + 9-Axis High-Precision IMU",
      vision: "8MP IMX219 Sensor (3280 x 2464)",
      frameworks: "Native ROS, PyTorch (TensorRT Optimized), TensorFlow/Keras (DonkeyCar)",
      connectivity: "Dual-Band WiFi / Bluetooth 4.2",
      control: "Wireless Gamepad Included"
    },
    quickSpecs: [
      { value: "Jetson Nano", label: "AI Processor" },
      { value: "360° LiDAR", label: "Pro SLAM" },
      { value: "8MP Wide", label: "Computer Vision" },
      { value: "Native ROS", label: "AI Framework" }
    ],
    features: [
      {
        iconName: "Cpu",
        title: "Dual-Controller Architecture",
        description: "Powered by an advanced Jetson Nano AI processor (4GB RAM / 16GB eMMC) for heavy AI workloads, paired with an RP2040 MCU for real-time, microsecond-precise motion control.",
      },
      {
        iconName: "Compass",
        title: "Pro SLAM & Navigation",
        description: "360° LiDAR mapping supporting Gmapping, Cartographer, and AMCL for real-time path planning, dynamic obstacle avoidance, and autonomous patrol.",
      },
      {
        iconName: "Eye",
        title: "Edge Computer Vision",
        description: "Equipped with a 160° Wide-Angle 8MP camera optimized for OpenCV, Object Tracking, and Deep Learning line following.",
      },
      {
        iconName: "Mic",
        title: "Smart Audio AI",
        description: "Dual MEMS microphones and speaker integration for Voice Recognition, NLP, and Speech Synthesis (TTS).",
      },
      {
        iconName: "Settings",
        title: "Pro-Grade Mechanics",
        description: "Authentic Ackerman Steering physics with high-torque 37-520 metal encoder motors and a premium aluminum alloy chassis.",
      }
    ],
    applications: [
      "Autonomous Driving & SLAM Research",
      "Edge AI & Deep Learning Model Testing",
      "Computer Vision & Line Following Development",
      "Voice Recognition & NLP Application Prototyping"
    ],
    whatsInTheBox: [
      "Jetson Nano Core Module & Dev IO Board + Pro Heatsink",
      "LiDAR Sensor & 8MP Camera",
      "Alloy Chassis, High-Power Motors & Steering Servo",
      "64GB High-Speed Storage + Wireless Controller",
      "All Essential Cables & Power Adapters (*18650 batteries sold separately*)"
    ]
  }
];

export default products;
