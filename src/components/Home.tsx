import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-[60vw] mx-auto px-4 py-16 space-y-24 bg-background text-foreground min-h-screen px-6 py-12  animate-fade">
      {/* Introduction */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-5xl font-bold text-primary">Hi, I'm Stefano D'Arrigo</h1>
            <div className="flex gap-4 mt-4">
              <a href="mailto:stefanodarrigo98@gmail.com" target="_blank" className="flex items-center px-4 py-1 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
              <Mail className="w-4 h-4 mr-2" /> Email
              </a>
              <a href="https://github.com/stdrr" target="_blank" className="flex items-center px-4 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
              <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
              <a href="https://linkedin.com/in/stdrr" target="_blank" className="flex items-center px-4 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </div>
            </div>
          <img
            src="/portrait_of_stdrr.jpg"
            alt="Stefano D'Arrigo"
            className="w-24 h-24 rounded-full object-cover ml-6 border-4 border-primary"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm a researcher passionate about Computer Vision. Currently pursuing a PhD in Artificial Intelligence at Sapienza University of Rome.
        </p>
      </motion.section>

      {/* Interests */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary">Interests</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
          <li>Computer Vision and Scene Understanding</li>
          <li> Representation Learning</li>
          <li>Multimodal Learning and Foundation Models</li>
          <li>Human-Centered AI</li>
          <li>Open-Source Research Tools</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary">Projects & Publications</h2>
        <div className="grid gap-6">
          {[
            {
              title: "CMS-OoD: Cross-Modal Steering for OoD Detection with Textual Explanations.",
              desc: "Can a pre-trained Semantic Segmentation model and a Vision-Language model play together to improve the OoD detection in driving scenes and explain what is happening?",
              links: [
                { label: "paper", url: "https://github.com/stdrr/vlm-ood" },
                { label: "code", url: "https://github.com/stdrr/vlm-ood" },
                { label: "slides", url: "https://github.com/stdrr/vlm-ood" }
              ]
            },
            {
              title: "ANTHROPOS: Benchmarking the Novel Task of Crowd Volume Estimation.",
              desc: "Can we estimate the volume of an entire crowd from a picture? Well, yes! We demonstrate how by releasing ANTHROPOS, a novel curated benchmark based on GTA V footages.",
              links: [
                { label: "paper", url: "https://arxiv.org/abs/2307.16345" },
                { label: "code", url: "https://github.com/colloroneluca/Crowd-Volume-Estimation" },
                { label: "data", url: "https://drive.google.com/file/d/1IWvC4QQnwK2xL15Fxlz0To_JRb01nETT/view?usp=sharing" }
              ]
            },
            {
              title: "Contracting Skeletal Kinematics for Human-Related Video Anomaly Detection.",
              desc: "A study on latent spaces with different geometrical properties - the Euclidean, the Sperical and the Hyperbolic space - for encoding normalcy and setting anomalous sequences apart.",
              links: [
                { label: "paper", url: "https://www.sciencedirect.com/science/article/pii/S0031320324005685" },
                { label: "code", url: "https://github.com/aleflabo/COSKAD" }
              ]
            },
            {
              title: "Multimodal Motion Conditioned Diffusion Model for Skeleton-Based Video Anomaly Detection.",
              desc: "Exploiting the multi-modality of a diffusion-based model for human-related video anomaly detection.",
              links: [
                { label: "paper", url: "https://openaccess.thecvf.com/content/ICCV2023/papers/Flaborea_Multimodal_Motion_Conditioned_Diffusion_Model_for_Skeleton-based_Video_Anomaly_Detection_ICCV_2023_paper.pdf" },
                { label: "code", url: "https://github.com/aleflabo/MoCoDAD" }
              ]
            }
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-white shadow-md p-6 dark:bg-gray-800 transition-all hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {proj.desc}
                {proj.links.map((l, j) => (
                  <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className="underline ml-2 text-primary dark:text-secondary">
                    [{l.label}]
                  </a>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* News */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-secondary">News</h2>
        <div className="grid gap-6">
            {[
            {
              title: "[01/06/2025] Starting a visiting research period at the University of Amsterdam."
            },
            {
              title: "[29/11/2024] Returning from the USA."
            },
            {
              title: "[01/09/2024] Starting a research internship at Panasonic AI Lab in Mountain View, California, USA."
            },
            {
              title: (
              <>
                [01/05/2024] Starting a research collaboration with{" "}
                <a href="https://italailabs.com" target="_blank" rel="noopener noreferrer" className="underline text-primary dark:text-secondary">
                ItalAI s.r.l.
                </a>.
              </>
              )
            },
            {
              title: "[01/11/2022] Starting my Ph.D. in Artificial Intelligence at the Sapienza University of Rome as part of the Italian National Ph.D. Programme."
            },
            {
              title: "[18/10/2022] Received my Masters' Degree in Data Science at the Sapienza University of Rome.",
            },
            {
              title: "[05/10/2020] Starting the Masters' course in Data Science at the Sapienza University of Rome."
            },
            {
              title: "[25/09/2020] Received my Bachelors' Degree in Computer Science at the University of Catania.",
            }
            ].map((post, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-white shadow-md p-6 dark:bg-gray-800 transition-all hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {post.title}
              </h3>
              {/* No desc/link for now */}
            </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Contact */}
      {/*
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-primary">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Let's get in touch! I'm always open to collaboration or conversation.
        </p>
        <div className="flex flex-wrap gap-4">
            <a href="mailto:stefanodarrigo98@gmail.com" target="_blank" className="flex items-center px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition mr-4">
            <Mail className="w-4 h-4 mr-2" /> Email
            </a>
            <a href="https://github.com/stdrr" target="_blank" className="flex items-center px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition mr-4">
            <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
            <a href="https://linkedin.com/in/stdrr" target="_blank" className="flex items-center px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
        </div>
      </motion.section> */}
    </main>
  );
}
