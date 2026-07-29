export const portfolioData = {
  personal: {
    name: "Krishna Ambekar",
    title: "AI/ML Engineer | Data Scientist | Generative AI | Computer Vision | M.Eng. Germany",
    location: "Nashik, Maharashtra, India",
    email: "krishnaambekar05@gmail.com",
    phone: "+919922383400",
    linkedin: "https://www.linkedin.com/in/krishna-ambekar-b4a2641b2",
    github: "https://github.com/KrishnaSA05",
    profileImage: "/Images/DSC_0396blurcvx.JPG",
    leetcode: "https://leetcode.com/u/KrishnaSA05/"
  },

  about: `AI/ML Engineer and Data Scientist with 2.5+ years of hands-on experience developing and deploying end-to-end AI solutions across Generative AI, Computer Vision, NLP, and predictive analytics. I've built production-ready systems including agentic RAG applications, deep learning models, multimodal retrieval pipelines, and MLOps-enabled services using Python, PyTorch, TensorFlow, LangChain, LangGraph, FastAPI, Docker, Azure, and AWS.

My work spans a Master's thesis on deep-feature vehicle re-identification with VITRONIC Machine Vision in Germany, an internship at Schaeffler building agentic RAG pipelines on Azure OpenAI with Microsoft Teams integration, and a research role at CARISSMA analyzing multi-sensor EV telemetry data. Alongside this, I actively build independent projects - from agentic RAG systems for enterprise data to fraud detection and image segmentation pipelines.

I completed my Master's in International Automotive Engineering (AI/ML & Data Science focus) at Technische Hochschule Ingolstadt, Germany, and I'm passionate about building reliable, scalable AI systems that solve real business problems - particularly in agentic RAG, MLOps, and applied computer vision. Fluent in English, with working professional German (B2).`,

  experience: [
    {
      id: "1",
      title: "AI Software Developer (Master Thesis) - Vehicle Re-Identification using Deep Features",
      company: "VITRONIC Machine Vision GmbH",
      location: "Wiesbaden, Germany",
      period: "August 2025 - June 2026",
      current: false,
      level: "Senior-Level",
      achievements: [
      "Designed and trained a Siamese architecture with ResNet and Vision Transformer backbones in PyTorch to learn discriminative vehicle embeddings, achieving 94% pairwise verification accuracy and a 12% Rank-1 improvement over baseline.",
      "Built a real-time vehicle retrieval and pairwise classification pipeline on NVIDIA A100 GPUs, validated with Grad-CAM, occlusion analysis, and t-SNE embedding visualization.",
      "Curated and preprocessed three vehicle datasets for robustness across camera viewpoints, and implemented MLOps tracking with Weights & Biases, benchmarking FP16/INT8 inference via ONNX and TensorRT."
    ]
    },
    {
      id: "2",
      title: "AI Engineering Intern",
      company: "Schaeffler Technologies AG & Co. KG",
      location: "Herzogenaurach, Germany",
      period: "January 2025 - June 2025",
      current: false,
      level: "Senior-Level",
      achievements: [
      "Designed and deployed an agentic RAG chatbot using LangGraph and Azure OpenAI, integrated with the Glassdollar supplier API and Microsoft Teams, achieving 80% retrieval accuracy on user requests.",
      "Built a scouting RAG chatbot using LangChain, Qdrant, and Hugging Face embeddings, cutting information retrieval time by over 60% through optimized chunking and re-ranking.",
      "Implemented Azure AI Content Safety guardrails and LangSmith monitoring, reducing enrichment API calls by 75% while delivering 2-6 second end-to-end response latency."
    ]
    },
    {
      id: "3",
      title: "Data Science Research Assistant",
      company: "CARISSMA - Institute for Vehicle Safety Research",
      location: "Ingolstadt, Germany",
      period: "March 2024 - December 2024",
      current: false,
      level: "Mid-Level",
      achievements: [
      "Built an end-to-end ML pipeline, automated with Apache Airflow, to extract, clean, and transform multi-source EV telemetry data via SQL-based ETL.",
      "Performed EDA on 28 sensor features and engineered 40+ features — including rolling statistics, lagged temporal features, and physics-based terms — to predict real-time power in electric vehicles (BMW i3).",
      "Trained and evaluated Random Forest, XGBoost, and CatBoost regression models with a full preprocessing pipeline, achieving a best R² of 0.82 with CatBoost on unseen driving trips."
    ]
    },
    {
      id: "4",
      title: "Graduate Engineering Trainee",
      company: "Mahindra and Mahindra Limited",
      location: "Nashik, India",
      period: "October 2022 - September 2023",
      current: false,
      level: "Entry-Level",
      achievements: [
        "Developed PFMEAs, POS, and QC plans and supported electronics system documentation for the Thar 502 model.",
        "Leveraged Industrial IoT sensor data and TPM metrics to drive process optimization decisions, improving operational efficiency by 23% and reducing workplace errors by 20%."
      ]
    }
  ],

  projects: [
    {
      id: "1",
      title: "ERP & Procurement Intelligence Assistant",
      description: "Agentic RAG system for enterprise procurement teams that answers queries spanning structured ERP data and unstructured contracts/policy documents, eliminating manual cross-referencing.",
      image: "/Images/ERP Project Image.png",
      technologies: ["Python", "LangGraph", "LangSmith", "FastAPI", "ChromaDB", "PostgreSQL", "AWS (Bedrock, RDS, EC2, Lambda)", "Groq", "RAGAS", "Docker"],
      githubUrl: "https://github.com/KrishnaSA05/ERP-Procurement-Intelligence-Assistant",
      demoUrl: "#",
      type: "personal",
      longDescription: "An agentic RAG system built for enterprise procurement teams to answer queries spanning structured ERP data (purchase orders, invoices) and unstructured documents (contracts, policy PDFs), removing the need for manual cross-referencing between systems.",
      objectives: [
        "Unify structured ERP data and unstructured documents behind a single conversational interface",
        "Intelligently route queries across SQL, RAG, and hybrid pipelines",
        "Generate context-aware, cited business responses",
        "Guard against off-topic or unsafe queries in an enterprise setting"
      ],
      features: [
        "Multi-agent architecture built with LangGraph, incorporating vision-language models (VLMs) for document understanding",
        "Integrated PostgreSQL, ChromaDB, FastAPI, and Amazon Bedrock/Groq",
        "Query router that selects SQL, RAG, or hybrid retrieval paths",
        "Input guardrails blocking off-topic/unsafe queries",
        "Resilient LLM fallbacks with LangSmith tracing",
        "Deployed on AWS (Bedrock, RDS, EC2, Lambda) with sub-2-second SQL latency"
      ],
      challenges: [
        "Reliably routing between structured and unstructured data sources",
        "Keeping responses grounded and properly cited across mixed data types",
        "Maintaining low latency for SQL-backed queries at enterprise scale",
        "Building guardrails robust enough for production procurement workflows"
      ],
      results: [
        "Achieved 0.89 Faithfulness and 0.92 Answer Relevancy on RAGAS evaluation",
        "Delivered under 2 second SQL query latency",
        "Eliminated manual cross-referencing between ERP and document systems",
        "Deployed end-to-end on AWS infrastructure"
      ],
      role: "Solo Developer",
      duration: "3 months",
      category: "Agentic RAG"
    },
    {
      id: "2",
      title: "Voice of Customer (VoC) Analytics Platform",
      description: "NLP platform that automatically analyzes thousands of customer reviews to identify which aspects drive dissatisfaction and track complaint trends over time.",
      image: "/Images/NLP project.png",
      technologies: ["Python", "DistilBERT", "BERTopic", "LangChain", "Groq", "MLflow", "FastAPI", "Streamlit", "AWS", "Docker"],
      githubUrl: "https://github.com/KrishnaSA05/Voice-of-Customer-VoC-Analytics-Platform",
      demoUrl: "#",
      type: "personal",
      longDescription: "An NLP platform that helps businesses automatically analyze thousands of customer reviews, identifying which specific aspects — price, delivery, quality — drive dissatisfaction, and tracking whether complaints are increasing over time.",
      objectives: [
        "Automatically surface which product/service aspects drive negative sentiment",
        "Discover complaint topics without manual labelling",
        "Generate readable reports summarizing customer feedback trends",
        "Keep inference fast enough for near real-time dashboards"
      ],
      features: [
        "Fine-tuned DistilBERT for Aspect-Based Sentiment Analysis, selected via MLflow-backed comparison against RoBERTa and DeBERTa",
        "BERTopic-based complaint discovery pipeline",
        "LangChain + Groq for automated report generation",
        "FastAPI backend with a Streamlit front-end dashboard",
        "Deployed on AWS (EC2, RDS, S3, Lambda)"
      ],
      challenges: [
        "Selecting the right base model for aspect-based sentiment at scale",
        "Discovering meaningful complaint topics without manual labels",
        "Keeping API response times low across a 94K-review dataset",
        "Generating coherent, business-readable summaries from noisy review text"
      ],
      results: [
        "Achieved 0.76 Weighted F1 across 94,000 reviews",
        "Sub-100ms API response time",
        "Auto-discovered 40-60 complaint topics with zero manual labelling",
        "Deployed with FastAPI and AWS (EC2, RDS, S3, Lambda)"
      ],
      role: "Solo Developer",
      duration: "2 months",
      category: "NLP & Analytics"
    },
    {
      id: "3",
      title: "Financial Transaction Fraud Detection",
      description: "Fraud detection pipeline on 6.3M financial transactions, addressing severe class imbalance through feature engineering and business-driven threshold optimization.",
      image: "/Images/fraud_detection image.png",
      technologies: ["Python", "Scikit-learn", "XGBoost", "SHAP", "MLflow", "FastAPI", "AWS SageMaker", "CloudWatch", "Docker"],
      githubUrl: "https://github.com/KrishnaSA05/Financial-Transaction-Fraud-Detection",
      demoUrl: "#",
      type: "personal",
      longDescription: "A fraud detection pipeline built on 6.3 million financial transactions, addressing a 0.13% class imbalance through targeted feature engineering and business-driven threshold optimization.",
      objectives: [
        "Detect fraudulent transactions in a highly imbalanced dataset",
        "Balance recall and precision against real business cost constraints",
        "Make model decisions explainable for compliance and reporting",
        "Deploy with production monitoring for data drift"
      ],
      features: [
        "Feature engineering tailored to a 0.13% fraud class imbalance",
        "Logistic Regression, Random Forest, and XGBoost models compared using SMOTE and cost-sensitive learning",
        "Business-driven decision threshold optimization",
        "SHAP explainability integrated into reporting",
        "Deployed via AWS SageMaker with MLflow tracking and CloudWatch drift monitoring"
      ],
      challenges: [
        "Handling extreme class imbalance without sacrificing precision",
        "Choosing a decision threshold aligned with real business cost of false positives/negatives",
        "Making complex ensemble model decisions explainable to non-technical stakeholders",
        "Setting up reliable drift monitoring in production"
      ],
      results: [
        "Achieved 99.76% recall and 95.96% precision with Random Forest",
        "Optimized decision threshold based on business cost trade-offs",
        "Deployed via AWS SageMaker with MLflow and CloudWatch monitoring",
        "Delivered SHAP-based explainability for fraud analyst reporting"
      ],
      role: "Solo Developer",
      duration: "2 months",
      category: "Machine Learning"
    },
    {
      id: "4",
      title: "Drivable Area Detection using Image Segmentation",
      description: "Dashcam drivable-area detection system performing 3-class pixel-level segmentation with low-latency inference, trained from scratch on BDD100K.",
      image: "/Images/segmentation image.png",
      technologies: ["PyTorch", "U-Net", "Grad-CAM", "ONNX Runtime", "Streamlit", "AWS", "Docker", "GitHub Actions", "OpenCV"],
      githubUrl: "https://github.com/KrishnaSA05/Image_Segmentation",
      demoUrl: "#",
      type: "personal",
      longDescription: "A drivable-area detection system for dashcam footage, performing 3-class pixel-level segmentation with low-latency inference, built end-to-end from a U-Net architecture trained from scratch.",
      objectives: [
        "Segment dashcam footage into drivable/non-drivable classes at low latency",
        "Train a segmentation model from scratch rather than relying on pretrained weights",
        "Optimize inference for CPU deployment via ONNX export",
        "Ship a fully containerized, CI/CD-deployed demo application"
      ],
      features: [
        "U-Net architecture trained from scratch in PyTorch on BDD100K",
        "Albumentations-based augmentation pipeline",
        "Grad-CAM explainability for model predictions",
        "ONNX export achieving a 2.4x CPU inference speedup",
        "Dockerized Streamlit demo app with GitHub Actions CI/CD, deployed via AWS ECR/EC2"
      ],
      challenges: [
        "Training a segmentation model from scratch without pretrained backbones",
        "Balancing inference speed against segmentation accuracy",
        "Optimizing for CPU-only inference environments via ONNX",
        "Setting up a reliable CI/CD pipeline for a Dockerized ML app"
      ],
      results: [
        "Achieved 60% mIoU at 30 FPS on GPU",
        "2.4x CPU speedup after ONNX export",
        "Deployed as a Dockerized Streamlit app on AWS with GitHub Actions CI/CD",
        "Validated predictions using Grad-CAM explainability"
      ],
      role: "Solo Developer",
      duration: "2 months",
      category: "Computer Vision"
    }
  ],

  skills: {
    "AI/ML Technologies": [
      "Machine Learning", "Deep Learning", "Computer Vision", "NLP",
      "Generative AI & LLMs", "Prompt Engineering", "RAG", "Agentic AI Systems"
    ],
    "Programming": [
      "Python", "SQL"
    ],
    "Frameworks": [
      "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
      "LangChain", "LangGraph", "FastAPI", "OpenCV"
    ],
    "Tools & Cloud": [
      "AWS (EC2, S3, SageMaker, Lambda, Bedrock)", "Azure (OpenAI Service, AI Search, Content Safety)",
      "Docker & CI/CD", "MLflow", "Weights & Biases", "Apache Airflow",
      "Vector DBs (ChromaDB, FAISS, Qdrant)", "ONNX & TensorRT"
    ],
    "Languages": [
      "English (Fluent)", "German (B2)"
    ]
  },

  education: [
    {
      id: "1",
      degree: "Master of Engineering - International Automotive Engineering",
      institution: "Technische Hochschule Ingolstadt",
      period: "October 2023 - June 2026",
      gpa: null,
      note: "Faculty of Electrical Engineering and Information Technology · Focus on Artificial Intelligence, Machine Learning and Data Science"
    },
    {
      id: "2",
      degree: "Bachelor of Engineering - Mechanical Engineering",
      institution: "Savitribai Phule Pune University",
      period: "July 2018 - May 2022",
      gpa: "9.2/10",
      note: null
    }
  ],

  certifications: [
    {
      id: "1",
      title: "AWS Certified Machine Learning Engineer Associate",
      issuer: "AWS",
      icon: "zap"
    },
    {
      id: "2",
      title: "LLM Engineering: Master AI, Large Language Models & Agents",
      issuer: "Udemy",
      icon: "brain"
    },
    {
      id: "3",
      title: "PyTorch for Deep Learning with Python",
      issuer: "Udemy",
      icon: "code"
    }
  ]
};
