/* eslint-disable react/jsx-key */
import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionShowreel = () => {
  const videoRef = useRef();
  const playButtonRef = useRef();
  const showreelItemRef1 = useRef();
  const showreelItemRef2 = useRef();
  const showreelItemRef3 = useRef();
  const showreelItemRef4 = useRef();
  // console.log("here");

  useEffect(() => {
    gsap.to(videoRef.current, {
      rotateY: "0deg",
      scale: "1",
      rotateX: "0deg",
      translateY: "0vh",
      overwrite: true,
      // scrollTrigger: {
      //   trigger: ".showreel",
      //   start: "top bottom",
      //   end: "top top",
      //   scrub: true,
      //   markers: false,
      // },
    });

    gsap.to(showreelItemRef1.current, {
      overwrite: true,
      delay: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef1.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef2.current, {
      delay: 0.1,
      opacity: 1,
      overwrite: true,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef2.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef3.current, {
      delay: 0.2,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      overwrite: true,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef3.current, start: "top 95%" },
    });
    gsap.to(showreelItemRef4.current, {
      delay: 0.3,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      overwrite: true,
      ease: "power1",
      scrollTrigger: { trigger: showreelItemRef4.current, start: "top 95%" },
    });

    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container">
          <div className="showreel-video-playbutton" ref={playButtonRef}>
            <Play fill="#010101" className="showreel-video-playbutton-icon" />
          </div>
          <div ref={videoRef} className="showreel-content-videobox">
            <div className="background">
              <div className="trail"></div>
            </div>
            <video
              src="/videos/ese.mp4"
              className="showreel-content-video"
              autoPlay="autoplay"
              muted
              playsInline={true}
              data-wf-ignore="true"
              preload="auto"
              loop
            />
          </div>
        </div>
        <div className="text-white text-center text-7xl font-bold mt-12">
          My Work Experience
        </div>
        <div className="showreel-content-row">
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef1}
          >
            <img
              src="/logos/salesforce.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef2}
          >
            <img
              src="/logos/insight.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef3}
          >
            
            <img
              src="/logos/zephyr.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef4}
          >
            <img
              src="/logos/semel.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div>
        <div>
          {/*<!-- Component: Alternative Changelog feed --> */}
          <ul
            aria-label="Alternative changelog feed"
            role="feed"
            className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-zinc-500 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-zinc-700 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]"
          >
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2026
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Principal AI/ML Software Engineer | Team Lead | Senior Data Scientist (Salesforce)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2026
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Architected production-grade GenAI and RAG systems supporting enterprise conversational intelligence,
                  knowledge management, AI assistants, semantic search, and customer-facing automation workflows.   
                  </li>
                  <li>
                  Developed intelligent document processing and retrieval workflows for enterprise PDFs, scanned records,
                  knowledge repositories, and regulated business documents supporting OCR, semantic search, and RAG use cases.
                  </li>
                  <li>
                  Evaluated AutoGen- and CrewAI-based multi-agent orchestration approaches for autonomous task routing,
                  collaborative agent execution, tool coordination, and enterprise workflow experimentation.  
                  </li>
                  <li>
                  Exposed FastAPI, Node.js, and .NET Core APIs supporting OCR extraction, semantic retrieval, enterprise search, SharePoint-style repository integration, and governed document-processing workflows while storing extracted metadata and embeddings using DynamoDB, MongoDB and PostgreSQL.
                  </li>
                  <li>
                  Designed Azure-focused AI agent workflows and enterprise automation prototypes aligned with Microsoft AI ecosystem requirements, including Azure AI services, agent orchestration, and workflow automation.
                  </li>
                  <li>
                  Implemented Azure serverless orchestration workflows using Azure Functions, Azure Storage, Azure Monitor, Azure SQL, Cosmos DB, logging, and alerting for conversational context persistence, metadata management, and enterprise AI operations.
                  </li>
                  <li>
	                Designed AWS-based MLOps workflows using SageMaker, EKS, ECS, MLflow, Kubeflow, Terraform, and Kubernetes-native pipeline orchestration for scalable training, deployment, and monitoring.                  </li>
                   <li>
                  Delivered AWS Bedrock-based GenAI prototypes with human-in-the-loop validation, response review checkpoints, model comparison workflows, and governed enterprise AI interaction patterns.
                  </li>
                   <li>
                  Orchestrated LangGraph and MCP-style orchestration workflows for stateful multi-agent execution, governed tool invocation, workflow routing, shared context management, retries, fallback handling, and auditable enterprise AI interactions.
                  </li>
                   <li>
                  Engineered enterprise RAG and retrieval workflows using LlamaIndex, Milvus, OpenSearch, Redis caching, semantic ranking, and evaluation of AWS Kendra for governed enterprise document retrieval and conversational AI systems.
                  </li>
                   <li>
                  Evaluated LLaMA-family experimentation workflows using LoRA/PEFT fine-tuning and quantization strategies to improve domain adaptation, inference efficiency, and cost-performance optimization.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2019
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Technical Advisor | Artificial Intelligence Fellow (Insight Data Science)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2021
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Advised AI fellows and engineering teams on applied machine learning, product development, deployment strategy, and production-oriented AI system design.
                  </li>
                  <li>
                  Mentored data scientists and engineers on ML architecture, model development, data infrastructure, product design, and application deployment.
                  </li>
                  <li>
                  Guided fellows on how to translate research prototypes into production-oriented applications with clear model assumptions, metrics, and user-facing workflows.
                  </li>
                  <li>
                  Provided technical feedback on system design, data pipeline structure, model-serving approaches, and cloud deployment readiness.
                  </li>
                  <li>
                  Developed a deep learning application for medical imaging analysis focused on pneumonia detection from chest X-rays.
                  </li>
                  
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2014
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Software Engineer | Data Scientist  (Zephyr Health)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2018
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Developed Java and Spring Boot backend services for healthcare data ingestion, categorization, scoring, entity disambiguation, and integration workflows.
                  </li>
                  <li>
                  Contributed to migration from monolithic pipeline services to Spring Kafka microservices, improving data refresh and processing speed.
                  </li>
                  <li>
                  Deployed containerized backend services using Docker and AWS ECS to support scalable healthcare analytics and distributed data-processing workloads.
                  </li>
                  <li>
                  Designed OCR and healthcare document-processing pipelines using OpenCV, Tesseract, Python, and NLP workflows to extract structured information from clinical documents, provider records, insurance forms, and healthcare PDFs.
                  </li>
                  <li>
                  Trained machine learning models on publication, clinical trial, insurance, provider, and commercial healthcare datasets to forecast product adoption and market behavior.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2009
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Statistical Programmer Analyst | Software Engineer (Semel Institute for Neuroscience and Human Behavior)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2014
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Designed statistical programming, ETL, and research software workflows supporting neuroscience, psychiatry, autism, ADHD, epilepsy, and cancer genetics research.
                  </li>
                  <li>
                  Consulted on psychiatry and neuroscience studies involving data acquisition, study design, statistical modeling, statistical programming, and research publication support.
                  </li>
                  <li>
                  Developed internal research applications and automation workflows using Python and Flask for data preparation, analysis support, and research reporting.
                  </li>
                  <li>
                  Designed data munging and analysis workflows to support online cancer genetics education evaluation and research administration.
                  </li>
                  <li>
                  Built ETL workflows using R, Python, Bash, SQL, and reproducible scripting patterns for neuroimaging, spectroscopic, behavioral, and bioinformatics datasets.
                  </li>
                </ul>
              </div>
            </li> 
            {/* <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2016
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Software Developer (Miami Consulting Services, LLC)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2016
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Programmed full-stack web applications that processed, analyzed, and visually rendered data for 15+ clients across various industries using Python with Django/Flask for backend data handling and ETL processes, improving data insights by 25%.
                  </li>
                  <li>
                  Managed time-sensitive updates, including content modifications and database upgrades, ensuring minimal downtime (99.9% uptime) and high accuracy with AWS cloud integrations and Docker for containerized deployments.
                  </li>
                  <li>
                  Planned, wrote, and debugged software applications with precision, incorporating secure integrations with APIs and databases using Go for scalable services and Kubernetes for microservices management, reducing bugs by 80%.
                  </li>
                  <li>
                  Applied analytical mindset to handle multiple roles in projects, thriving in fast-paced environments to deliver optimal results while experimenting with early deep learning prototypes in TensorFlow and Hugging Face for GenAI, achieving 90% model accuracy.
                  </li>
                  <li>
                  Liaised with teams and clients to establish productive partnerships, utilizing communication skills to align on goals and requirements for ML-enhanced applications, including HIPAA-aware designs where applicable, completing 10+ joint projects ahead of schedule.
                  </li>
                </ul>
              </div>
            </li>  */}
          </ul>
          {/*<!-- End Alternative Changelog feed --> */}
        </div>
      </div>
    </section>
  );
};

export default memo(SectionShowreel);
