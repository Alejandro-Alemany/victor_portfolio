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
              src="/logos/Screenshot_14.png"
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
              src="/logos/Screenshot_15.png"
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
              src="/logos/Screenshot_16.png"
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
              src="/logos/Screenshot_17.jpg"
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
                2025
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Team Lead | Senior AI/ML Engineer | Data Scientist | Senior Software Engineer (AvaSure)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2025
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Led end-to-end delivery of AI/ML systems, defining system architecture and overseeing
                  execution across engineering and clinical teams.  
                  </li>
                  <li>
                  Owned multiple concurrent AI/ML workstreams, driving architecture decisions, prioritization,
                  and delivery across clinical, data, and platform teams while aligning technical solutions with product and operational goals.  
                  </li>
                  <li>
                  Developed deep learning and NLP models using PyTorch and Hugging Face Transformers (BERT) to process 
                  unstructured clinical notes, transcripts, and patient interactions, improving early risk detection accuracy by 30%
                  while aligning outputs with structured FHIR resources and clinical ontologies.  
                  </li>
                  <li>
                  Optimized AI models for bedside virtual care assistants, focusing on triage of patient requests and enhancing overall quality of care by 35% through data-driven insights with Scikit-learn for statistical modeling and leveraging Snowflake as a data warehouse.
                  </li>
                  <li>
                  Enhanced AI-driven patient monitoring by integrating GCP Vertex AI and Azure Cognitive Services for advanced computer vision and NLP, using Python with TensorFlow and Hugging Face for model development, achieving 20% higher model accuracy.
                  </li>
                  <li>
                  Created React-based dashboards with Material UI and Tailwind CSS, paired with Node.js/Express backend services and FastAPI for high-performance APIs, enabling real-time visualization of patient data processed through GCP BigQuery and utilizing Weaviate’s vector DB, improving data retrieval by 30%.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2023
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Machine Learning Engineer | Senior Software Engineer (Rx Return Services (RxRS) )
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2022
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Developed algorithms using machine learning and statistical modeling techniques with PyTorch, Scikit-learn, and Hugging Face to enhance system performance by 20% and data accuracy by 15% in pharmaceutical return processes, integrating GenAI for predictive analytics.
                  </li>
                  <li>
                  Evaluated and refined predictive models to optimize quality control and data management within the supply chain operations, deploying them via AWS machine learning pipelines including Bedrock for LLM fine-tuning, reducing errors by 10%.
                  </li>
                  <li>
                  Designed self-running AI software that automated predictive models, reducing manual intervention by 70% and improving operational efficiency by 25% through deep learning integrations with Node.js/Express backend and RESTful/GraphQL APIs.
                  </li>
                  <li>
                  Incorporated deep learning components into full-stack applications using Angular for frontend dashboards with Context API, handling complex data processing tasks related to inventory and returns, improving user satisfaction by 30% with Pinecone for RAG-based systems.
                  </li>
                  <li>
                  Conceptualized AWS for deploying scalable machine learning pipelines, ensuring robust and secure handling of sensitive pharmaceutical data with Python and Go backend scripts, achieving 95% uptime with Kafka topics and partitions for event streaming.
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="article"
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-zinc-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
            >
              <h4 className="hidden text-2xl text-center font-medium leading-7 text-zinc-400 lg:block lg:w-28 ">
                2022
              </h4>
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-2xl font-medium leading-7 text-zinc-200">
                Senior Software Engineer  (100X, Inc)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2022
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Developed automated testing frameworks in Python and Node.js that accelerated the QA process by 10% and increased productivity by 10% from card to demo stages, incorporating CI/CD with GitHub Actions.
                  </li>
                  <li>
                  Realized an access database system with user-friendly forms built in React using TypeScript and Next.js, enabling efficient tracking of aircraft parts inventory, reducing manual effort by 40% through interactive frontend components with Redux.
                  </li>
                  <li>
                  Assembled full-stack web applications to analyze and process client data, incorporating secure interactions with multiple Go-based services interacting with APIs and databases for backend logic and GraphQL for efficient querying, improving data processing speed by 15%.
                  </li>
                  <li>
                  Applied analytical skills to debug and optimize code, managing 3 simultaneous projects without delays in a dynamic business setting while integrating deep learning models for data analysis with TensorFlow and LangChain for GenAI features.
                  </li>
                  <li>
                  Coordinated with teams to integrate machine learning elements where applicable, reflecting expertise in deep learning for data processing with prompt engineering and bias detection in LLM workflows, reducing bias by 25%.
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
                Machine Learning Engineer | Founder (LuminaLogiX)
                  <span className="font-normal text-zinc-400 lg:hidden">
                    {" "}
                    - 2019
                  </span>
                </h3>
                <ul className="pl-5 list-disc text-zinc-400 text-xl marker:text-zinc-500">
                  <li>
                  Designed and implemented an in-house algorithm for inventory tracking using advanced computer vision with OpenCV, PyTorch, and Hugging Face, pioneering innovations in intelligent inventory management via API integrations and RAG, reducing errors by 50%.
                  </li>
                  <li>
                  Led the patent process for the inventory system with the USPTO, demonstrating leadership in developing cutting-edge AI solutions that incorporated deep learning frameworks and GenAI models like those from OpenAI, achieving patent approval in 12 months.
                  </li>
                  <li>
                  Built a recommendation engine that analyzed user preferences and behaviors using NLP techniques in Python with LangChain, achieving a 40% reduction in food wastage through personalized recommendations and vector embeddings in FAISS.
                  </li>
                  <li>
                  Managed full lifecycle of 4 AI projects, from conception to deployment, utilizing machine learning pipelines and deep learning techniques on AWS infrastructure with Kubernetes orchestration and Terraform for IaC, completing projects 95% on schedule.
                  </li>
                  <li>
                  Unified Angular components for strengthened user experience in recommendation apps, ensuring seamless interaction with ML backend services using Node.js, Express, and PostgreSQL for schema design and performance optimization, boosting adoption by 35%.
                  </li>
                </ul>
              </div>
            </li> 
            <li
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
            </li> 
          </ul>
          {/*<!-- End Alternative Changelog feed --> */}
        </div>
      </div>
    </section>
  );
};

export default memo(SectionShowreel);
