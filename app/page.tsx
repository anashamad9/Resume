"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, GraduationCap, Lightbulb, Mail, Moon, MapPin, Sun, User, Folder, Phone } from "lucide-react"
import { Linkedin, Github, Twitter } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("about")

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div id="about" className="min-h-screen bg-white dark:bg-black text-neutral-800 dark:text-neutral-200 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-6 h-fit space-y-8">
            {/* Profile Header */}
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-4 group">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4D03AQG8O6QLXP-0Lg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705436353196?e=1744848000&v=beta&t=udAGKaA2nQvBzjO3xnXlDLk-y8b1sApB4h5L5Y8Ykls"
                  alt="Anas Hamad"
                  width={60}
                  height={60}
                  className="rounded-full transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <h1 className="text-2xl font-mono">Anas Hamad</h1>
                  <p className="text-neutral-600 dark:text-neutral-400">AI & Machine Learning Engineer</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                AI & Machine Learning Engineer with expertise in data manipulation, preprocessing, and model
                development. Skilled in building and fine-tuning machine learning models, including RAG and LLMs.
              </p>
              <Button
                variant="outline"
                className="rounded-lg transition-all duration-300 hover:bg-neutral-800 hover:text-white bg-black text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/uc?export=download&id=1AuCI88fPzTGWS4mFzgqZOdRfKq-HJIlX",
                    "_blank",
                  )
                }}
              >
                Download My Resume
              </Button>
            </div>

            {/* Contact Info in Sidebar */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Mail className="h-4 w-4" />
                <span>
                  <a
                    href="mailto:hi.anashamad@gmail.com"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  ></a>
                  hi.anashamad@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <MapPin className="h-4 w-4" />
                <span>Amman, Jordan</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Phone className="h-4 w-4" />
                <span>
                  {" "}
                  <a href="tel:+962795874662" className="hover:text-neutral-900 dark:hover:text-neutral-100"></a>
                  +962 7 9587 4662
                </span>
              </div>
            </div>
            {/* Keywords Section */}

            <div className="space-y-4">
              <h2 className="text-xl font-mono">Core Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Data Cleaning",
                  "Deep Learning",
                  "Natural Language Processing",
                  "Data Analysis",
                  "AI Model Development",
                  "LLMs",
                  "Fine Tuning",
                  "RAG",
                  "Data Manipulation",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-neutral-100 text-neutral-800 text-sm font-medium px-2.5 py-0.5 rounded-md transition-colors duration-300 hover:bg-neutral-200 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/anas-hamad1909/",
                  },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/anashamad9" },
                  { icon: <Twitter className="w-5 h-5" />, label: "X", href: "https://x.com/its_anas9" },
                  {
                    icon: (
                      <Image
                        src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-pirate.png"
                        alt="Hugging Face"
                        width={20}
                        height={20}
                      />
                    ),
                    label: "Hugging Face",
                    href: "https://huggingface.co/anashamad",
                  },
                  {
                    icon: <Image src="./resume/images/image (4).png" alt="Kaggle" width={20} height={20} />,
                    label: "Kaggle",
                    href: "https://www.kaggle.com/anasbassam",
                  },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="transition-all duration-300 hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    asChild
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Experience Section */}
            <section
              id="experience"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <h2 className="text-2xl font-mono mb-6">Experience</h2>
              <div className="space-y-8">
                {[
                  {
                    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGSNoIztQ6PNA/company-logo_100_100/company-logo_100_100/0/1727619801809/onqoud1_logo?e=1747267200&v=beta&t=fFo7z2hmoVKqYqcV8rMFA5yIm5mvQTPEPJD_4lGiVZs",
                    role: "AI Product development",
                    company: "@Onqoud",
                    period: "2024 - now",
                    description:
                      "Led the development of Onqoud, a SaaS platform that uses AI-driven insights to help restaurants predict future sales and optimize operations. Focused on building machine learning models, real-time data analytics, and integrating scalable solutions using AWS.",
                  },
                  {
                    logo: "https://framerusercontent.com/images/1tm1waPbgpItjuf1cKjZekKkYYw.jpeg",
                    role: "AI & Machine Learning Internship",
                    company: "@ShAI for AI",
                    period: "06/2024 - 10/2024",
                    description:
                      "Focusing on data preprocessing, feature engineering, and model training using Python, TensorFlow, and Pandas. Gained experience in predictive analytics, natural language processing, and data visualization.",
                  },
                  {
                    logo: "https://framerusercontent.com/images/aB7I3zGWfTnmxvFDbkJ8s5Qqf1w.jpg?scale-down-to=512",
                    role: "Python Developer Internship",
                    company: "@Ahli Bank",
                    period: "10/2022 - 2023/02",
                    description:
                      "Gained experience in structured data management, AWS cloud solutions, and database design. Worked on data processing and automation tasks using Python, contributing to cloud-based data infrastructure projects.",
                  },
                ].map((job, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-start">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="rounded-xl border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {job.role}
                        </h3>
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm">{job.company}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-2">{job.period}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <h2 className="text-2xl font-mono mb-6">Education</h2>
              <div className="space-y-6">
                {[
                  {
                    degree: "Bachelor's of Computer Engineering",
                    university: "Balqaa Applied University",
                    period: "2020 - 2025",
                    description:
                      "Completed a Bachelor's in Computer Engineering, specializing in AI, machine learning, and data science. Developed an advanced Arabic LLM for my graduation project and gained hands-on experience through internships. Hold a strong recommendation letter from my instructors.",
                    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN91ctlMhjwhUXgSSnWFHtUTII7PDDx0pmD7_mz0WsUUDmYj73e_CHw2QmDmP-LxugAUI44uwC9eY64c5KEPcg63kff0kiuTMyu80t-msF218uN3_b5o8E02W3WX1kRcyYHFQo3imLXBU/s1600-rw/%25D8%25AC%25D8%25A7%25D9%2585%25D8%25B9%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25A8%25D9%2584%25D9%2582%25D8%25A7%25D8%25A1.jpg",
                  } /*,
      {
        degree: "Bachelor of Science in Computer Science",
        university: "Massachusetts Institute of Technology",
        period: "2018 - 2022",
        description:
          "Specialized in data science and algorithms. Graduated with honors and completed several AI-related projects.",
        logo: "/placeholder.svg",
      }*/,
                ].map((edu, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-start">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.university}
                        width={48}
                        height={48}
                        className="rounded-xl border border-neutral-300 dark:border-neutral-700 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {edu.degree}
                        </h3>
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm">{edu.university}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-2">{edu.period}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Stack Section */}
            <section
              id="skills"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">My Stack</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-transform duration-300 hover:scale-110 dark:hover:bg-neutral-700"
                >
                  <span className="sr-only">View all tools</span>→
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Coding */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Coding</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "Python",
                        logo: "/resume/images/embedded-python-training-300x300.jpg",
                        url: "https://www.python.org/",
                      },
                      {
                        name: "TensorFlow",
                        logo: "https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A4PA4301PT17X56Y32D1042084122W21897H21897/views/1,width=550,height=550,appearanceId=4,backgroundColor=00224C,noPt=true/104-tensorflow-logo-mens-t-shirt.jpg",
                        url: "https://www.tensorflow.org/",
                      },
                      {
                        name: "PyTorch",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYESNrxVj4Mvlt-cEXJnNcqmItq75-kWR7g&s",
                        url: "https://pytorch.org/",
                      },

                      {
                        name: "SQL",
                        logo: "https://www.netgen.co.za/wp-content/uploads/2023/05/SQL-Database.png",
                        url: "",
                      },

                      {
                        name: "ScikitLearn",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ioErrXCaT2yZgsMaefs8irg9dRTWVk882Q&s",
                        url: "https://scikit-learn.org/stable/",
                      },

                      {
                        name: "Keras",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3G7aNWlBFrxvcqPJlFkdUqQ3mSxFokba9g&s",
                        url: "https://keras.io/",
                      },
                      {
                        name: "NumPy",
                        logo: "https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png",
                        url: "https://numpy.org/",
                      },
                      {
                        name: "Pandas",
                        logo: "/resume/images/pandas-logo-776F6D45BB-seeklogo.com.png",
                        url: "https://pandas.pydata.org/",
                      },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {tool.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Tools */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Tools</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "Tableau",
                        logo: "https://live.staticflickr.com/979/42099499622_eca95d19b4_w.jpg",
                        url: "https://www.tableau.com/",
                      },
                      {
                        name: "PowerBI",
                        logo: "https://sc.filehippo.net/images/t_app-icon-l/p/cb69b4e3-1689-432d-9b6d-7a0f62797189/2399238384/power-bi-desktop-logo",
                        url: "https://powerbi.microsoft.com/",
                      },
                      {
                        name: "Excel",
                        logo: "https://i.pinimg.com/736x/19/92/91/1992917f382f70752f1327c6f10e0a7a.jpg",
                        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
                      },
                      {
                        name: "Jupyter",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEFAfIN6GmkRTzI_mDlRhhq67QGimI-pKFw&s",
                        url: "https://jupyter.org/",
                      },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {tool.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Deployment */}
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-600 dark:hover:shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Deployment</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        name: "GitHub",
                        logo: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
                        url: "https://github.com/",
                      },
                      {
                        name: "AWS",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
                        url: "https://aws.amazon.com/",
                      },
                      {
                        name: "Hugging Face",
                        logo: "/resume/images/hugging-face-icon-logo-png_seeklogo-515010.png",
                        url: "https://huggingface.co/",
                      },

                      {
                        name: "Oracle",
                        logo: "https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blte0bfa2f46eeb3f01/652652328d2fca2c26ae16f2/oracle_0.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
                        url: "https://www.oracle.com/jo/database/",
                      },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg mb-2 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-sm dark:group-hover:border-neutral-600 dark:group-hover:shadow-sm overflow-hidden">
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                          {tool.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">Projects</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-transform duration-300 hover:scale-110 dark:hover:bg-neutral-700"
                >
                  <span className="sr-only">View all projects</span>→
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Onqoud - AI Product",
                    description:
                      "Developed a BI product with features like future forecasting and insight for restaurants.",
                    image: "/resume/images/onqoud.png",
                    link: "https://onqoud.com/",
                  },
                  {
                    name: "CiTrain",
                    description:
                      "CiTrain is a seb app where you can choose any type of ML model, uploade your data and get the output directly",
                    image: "/resume/images/image (3).png",
                    link: "https://github.com/anashamad9",
                  },
                  {
                    name: "Other",
                    description: "See my other projects.",
                    image: "https://codeprints.dev/cdn/shop/files/2_2048x.jpg?v=1614347846",
                    link: "https://github.com/anashamad9",
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:hover:border-neutral-600 dark:hover:shadow-md group"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white dark:text-neutral-100 font-semibold mb-2">{project.name}</h3>
                      <p className="text-neutral-200 dark:text-neutral-300 text-sm mb-4">{project.description}</p>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-300"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certificates & Achievements Section */}
            <section className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm">
              <h2 className="text-2xl font-mono mb-6">Certificates & Achievements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certificates */}
                <div>
                  <h3 className="text-neutral-500 dark:text-neutral-400 mb-4">My Top Certificates</h3>
                  <div className="space-y-4">
                    {[
                      {
                        logo: "https://yt3.googleusercontent.com/ytc/AIdro_m6psai1Pd5oG3nGbw_hVfG-qmJ8R1ntco83MTXDf5cdoo=s900-c-k-c0x00ffffff-no-rj",
                        title: "Data Science & AI Track",
                        org: "DataCamp",
                        year: "2024",
                      },
                      {
                        logo: "https://yt3.googleusercontent.com/ytc/AIdro_m6psai1Pd5oG3nGbw_hVfG-qmJ8R1ntco83MTXDf5cdoo=s900-c-k-c0x00ffffff-no-rj",
                        title: "Machine Learning Engineering Track",
                        org: "DataCamp",
                        year: "2025",
                      },
                      {
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png",
                        title: "Data Science Track",
                        org: "Coursera",
                        year: "2024",
                      },
                      {
                        logo: "https://erc-jordan.org/wp-content/uploads/2024/03/zinc.png",
                        title: "Python Fundamentals",
                        org: "Zinc",
                        year: "2022",
                      },
                    ].map((cert, index) => (
                      <div key={index} className="flex gap-3 group">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.org}
                          width={40}
                          height={40}
                          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div>
                          <h4 className="font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-neutral-600 dark:textneutral-400">
                            {cert.org} - {cert.year}
                          </p>
                        </div>{" "}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Achievements */}
                <div>
                  <h3 className="text-neutral-500 dark:text-neutral-400 mb-4">My Top Achievements</h3>
                  <div className="space-y-4">
                    {[
                      {
                        logo: "https://erc-jordan.org/wp-content/uploads/2024/03/psut.jpg",
                        title: "PSUT best project",
                        desc: "Award for winning the best startup idea",
                      },
                      {
                        logo: "https://cdn.worldvectorlogo.com/logos/nasa-1.svg",
                        title: "First place NASA AI competition",
                        desc: "First place in NASA competition for best project in artificial intelligence",
                      },
                      {
                        logo: "https://irc-jordan.com/wp-content/uploads/2023/02/BIG-by-Orange.png",
                        title: "Orange Incubator",
                        desc: "6-month journey at Orange Incubator learning AI startup product development",
                      },
                    ].map((achievement, index) => (
                      <div key={index} className="flex gap-3 group">
                        <Image
                          src={achievement.logo || "/placeholder.svg"}
                          alt={achievement.title}
                          width={48}
                          height={48}
                          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div>
                          <h4 className="font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{achievement.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section
              id="contact"
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:hover:border-neutral-700 dark:hover:shadow-sm"
            >
              <h2 className="text-2xl font-mono mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Email</span>
                  <a
                    href="mailto:hi.anashamad@gmail.com"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    hi.anashamad@gmail.com
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Phone</span>
                  <a href="tel:+962795874662" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                    +962 7 9587 4662
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/anas-hamad1909/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anas-hamad1909
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Github</span>
                  <a
                    href="https://github.com/anashamad9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anashamad9
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Hugging Face</span>
                  <a
                    href="https://huggingface.co/anashamad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anashamad
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">X (Twitter)</span>
                  <a
                    href="https://x.com/its_anas9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    its_anas9
                  </a>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">Kaggle</span>
                  <a
                    href="https://www.kaggle.com/anasbassam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    anasbassam
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      ;
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-4">
          {[
            { icon: <User className="w-4 h-4" />, label: "About", section: "about" },
            { icon: <Briefcase className="w-4 h-4" />, label: "Experience", section: "experience" },
            { icon: <GraduationCap className="w-4 h-4" />, label: "Education", section: "education" },
            { icon: <Folder className="w-4 h-4" />, label: "Projects", section: "projects" },
            { icon: <Lightbulb className="w-4 h-4" />, label: "Tech Stack", section: "skills" },
            { icon: <Mail className="w-4 h-4" />, label: "Contact", section: "contact" },
          ].map(({ icon, label, section }) => (
            <div key={section} className="relative group">
              <button
                onClick={() => scrollToSection(section)}
                className={cn(
                  "p-2 rounded-full transition-colors duration-200",
                  activeSection === section
                    ? "text-white bg-neutral-800 dark:bg-neutral-700"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
                )}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </button>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-neutral-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

