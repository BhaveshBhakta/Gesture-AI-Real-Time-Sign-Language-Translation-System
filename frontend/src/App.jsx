import { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Video, 
  Fingerprint, 
  Brain, 
  Languages, 
  Mic, 
  GraduationCap, 
  Smartphone, 
  Beaker, 
  Accessibility,
  ArrowLeft,
  Activity,
  Maximize2,
  Cpu
} from "lucide-react";


export default function App() {
  const [showHub, setShowHub] = useState(false);

  const [detectedSigns, setDetectedSigns] = useState("");
  const [isConnected, setIsConnected] = useState(true);

  // Add this effect to fetch data from your backend
  useEffect(() => {
    if (!showHub) return; // Don't fetch if the camera hub is closed

    const fetchSentence = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_sentence");
        if (response.ok) {
          const data = await response.json();
          setDetectedSigns(data.sentence);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        setIsConnected(false);
      }
    };

    const intervalId = setInterval(fetchSentence, 500);
    return () => clearInterval(intervalId);
  }, [showHub]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const pageTransition = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-black text-primary tracking-tight cursor-pointer"
            onClick={() => setShowHub(false)}
          >
            Gesture AI
          </div>
          
          <div className="flex items-center gap-4">
            {!showHub && (
              <button 
                onClick={() => setShowHub(true)}
                className="ml-4 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-opacity-90 active:scale-95 transition-all"
              >
                 Try it Now
              </button>
            )}
            {showHub && (
              <button 
                onClick={() => setShowHub(false)}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Exit Hub
              </button>
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {!showHub ? (
          <motion.div key="landing" {...pageTransition}>
            <main className="pt-24 lg:pt-32">
              {/* Hero Section */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 border-b border-gray-100">
                <motion.div 
                  className="lg:w-3/5"
                  {...fadeIn}
                >
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">Bridging the Gap</p>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8">
                    Making Communication <br/>
                    <span className="italic font-light">Universal.</span>
                  </h1>
                  <p className="text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12">
                    Gesture AI uses computer vision and deep learning to translate sign language gestures into text in real time, helping deaf and hard-of-hearing individuals communicate more easily.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button 
                      onClick={() => setShowHub(true)}
                      className="w-full sm:w-auto px-8 py-4 bg-secondary-container text-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      Try it Now
                    </button>
                    <button className="px-6 py-4 text-primary border-b-2 border-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                      Read Whitepaper <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                  className="lg:w-2/5 flex flex-col justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="border-l border-gray-200 pl-8 py-4">
                    <p className="text-xs font-bold text-accent uppercase mb-4 tracking-wider">The Pipeline Goal</p>
                    <p className="text-sm text-gray-600 mb-12 leading-relaxed">
                      We envision communication not as a barrier to be managed, but as a fluid, universal right. Poised, professional, and endlessly empathetic through code.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-5xl font-bold text-primary leading-none mb-2">1,662</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Spatial Landmarks</p>
                      </div>
                      <div>
                        <p className="text-5xl font-bold text-primary leading-none mb-2">6</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Deep Learning Models</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Inclusion Section (Moved Up per user preference) */}
              <section className="bg-surface-container-low py-24 lg:py-32 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="flex flex-col lg:flex-row gap-24">
                    <motion.div 
                      className="lg:w-1/2"
                      {...fadeIn}
                    >
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4">Inclusion First</p>
                      <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">How It Helps Deaf and Hard-of-Hearing Individuals</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        Gesture AI is designed to bridge critical communication gaps by providing immediate, real-time translation of sign language. By reducing dependence on professional interpreters for everyday interactions, we promote greater independence and inclusion. This technology ensures that deaf and hard-of-hearing individuals can engage in spontaneous conversations.
                      </p>
                      <div className="p-10 bg-white/50 backdrop-blur rounded-2xl border border-gray-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                        <p className="text-[10px] font-bold text-accent uppercase mb-6 tracking-widest">Impact Statement</p>
                        <p className="text-3xl font-bold text-primary leading-tight relative">
                          Transforming sign language into text to empower users for a more equitable world.
                        </p>
                      </div>
                    </motion.div>

                    <div className="lg:w-1/2">
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-10">Use Cases</p>
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                      >
                        {[
                          { icon: Mic, title: "Communication Assistance", desc: "Real-time support for everyday face-to-face interactions." },
                          { icon: GraduationCap, title: "Educational Tools", desc: "Enabling inclusive learning environments for students and teachers." },
                          { icon: Smartphone, title: "Accessibility-Focused Apps", desc: "Integrating translation into mobile platforms for on-the-go access." },
                          { icon: Beaker, title: "HCI Research", desc: "Advancing human-computer interaction through gestural data." },
                          { icon: Accessibility, title: "Assistive Technology", desc: "Developing specialized hardware solutions for long-term accessibility needs.", full: true }
                        ].map((use, idx) => (
                          <motion.div 
                            key={idx}
                            className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-accent hover:-translate-y-1 transition-all group ${use.full ? 'md:col-span-2' : ''}`}
                            variants={fadeIn}
                          >
                            <use.icon className="text-accent mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                            <h5 className="font-bold text-primary mb-3">{use.title}</h5>
                            <p className="text-xs text-gray-500 leading-relaxed font-semibold">{use.desc}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pipeline Bento Grid */}
              <section id="architecture" className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="text-center mb-20">
                    <p className="text-accent text-[10px) font-bold uppercase tracking-[0.3em] mb-4">Technical Architecture</p>
                    <h2 className="text-4xl font-bold text-primary">The Anatomy of a Sign</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Step 1 */}
                    <motion.div 
                      className="md:col-span-8 bg-white/70 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col justify-between"
                      {...fadeIn}
                    >
                      <div>
                        <Video className="text-accent mb-8" size={40} strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold text-primary mb-6">01. Neural Capturing</h3>
                        <p className="text-gray-600 max-w-xl leading-relaxed">
                          Using standard RGB webcams, we stream high-definition video into our local processing engine. Our computer vision layer ignores background noise to focus purely on the signer's dynamics.
                        </p>
                      </div>
                      <div className="mt-12 rounded-xl overflow-hidden h-64 lg:h-80 bg-gray-200 relative group">
                        <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5oCqG6tYPZPgHyUT9hYRlfq9DREBenyOXG_AOvlyVesRHKcqLiSKvZMRcYOBKxbFbwOZ7vNYADegsB6tIE-DS6twTe4Ku6XggFJhkGG74dKUQi_xYMkOx6ieblThoJIJWGnkuUNZK0KqYqPO-M4JtcmEKEvXa0oAHDPa1V8w_uFibr59WzhRSgwcoXEsAMvY-hjvXimr2h3JkXMtLZG1UdfsTWCyNWULPGlELSjEYheYaWU5UihiHM8iDIXt6iXrOM4msBhS-o_w" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                        alt="Neural Feed"
                      />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-primary/90 backdrop-blur px-8 py-4 rounded-full flex items-center gap-4 text-white shadow-2xl">
                            <span className="flex h-3 w-3 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="font-bold tracking-tight">Live Capture Feed Active</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div 
                      className="md:col-span-4 bg-primary p-8 lg:p-12 rounded-2xl border border-accent text-white flex flex-col"
                      {...fadeIn}
                      transition={{ delay: 0.1 }}
                    >
                      <Fingerprint className="text-secondary-container mb-8" size={40} strokeWidth={1.5} />
                      <h3 className="text-3xl font-bold mb-6 leading-tight">02. MediaPipe Landmark Analysis</h3>
                      <p className="text-primary-fixed opacity-80 mb-12 leading-relaxed">
                        We extract 1,662 unique landmarks from the hands, face, and body. This high-density feature set ensures that even the most subtle facial expressions (non-manual signals) are captured.
                      </p>
                      <div className="mt-auto space-y-6">
                        {[
                          ["Hand Joints", "21 / Hand"],
                          ["Face Mesh", "468 Points"],
                          ["Pose Points", "33 Anchors"]
                        ].map(([label, value]) => (
                          <div key={label} className="flex justify-between border-b border-accent pb-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{label}</span>
                            <span className="font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div 
                      className="md:col-span-4 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm"
                      {...fadeIn}
                      transition={{ delay: 0.2 }}
                    >
                      <Brain className="text-accent mb-8" size={40} strokeWidth={1.5} />
                      <h3 className="text-3xl font-bold text-primary mb-6">03. Recurrent Inference</h3>
                      <p className="text-gray-600 leading-relaxed mb-8">
                        Landmark sequences are fed into a stacked LSTM/GRU network. This temporal model understands the "path" of a sign, distinguishing between similar gestures based on movement velocity and direction.
                      </p>
                      <div className="text-accent font-black italic tracking-tight underline">
                        TensorFlow Optimized
                      </div>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div 
                      className="md:col-span-8 bg-white/70 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border-2 border-accent flex flex-col lg:flex-row items-center gap-12"
                      {...fadeIn}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex-1">
                        <Languages className="text-accent mb-8" size={40} strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold text-primary mb-4">04. Real-time Semantic Feed</h3>
                        <p className="text-gray-600 leading-relaxed">
                          The final layer transforms neural predictions into natural language. By converting model outputs into readable text instantly, it ensures the results follow proper grammar rather than a literal word-for-sign replacement.
                        </p>
                      </div>
                      <div className="w-full lg:w-1/3 bg-background border border-gray-200 p-6 rounded-xl font-mono text-sm">
                        <div className="text-[10px] text-gray-400 mb-4 uppercase tracking-[0.2em] font-bold">Terminal Output</div>
                        <p className="text-primary mb-2 opacity-70">&gt; Processing Frame 204...</p>
                        <p className="text-primary mb-2">&gt; Gesture: "Communication"</p>
                        <motion.p 
                          className="text-accent font-bold"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          &gt; Output: "Hello, Thank You"
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Tech Stack Section */}
              <section id="scaling" className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 pt-12">
                      <div className="sticky top-32">
                        <h2 className="text-7xl font-bold text-primary leading-none mb-8 tracking-tighter">
                          Built for <br/>Scale.
                        </h2>
                        <p className="text-gray-600 mb-12 leading-relaxed">
                          Built with optimized computer vision and deep learning pipelines, GestureAI delivers real-time performance on conventional hardware.
                        </p>
                        <div className="w-40 h-40 rounded-full border-2 border-accent flex items-center justify-center p-3 relative overflow-hidden group">
                          <div className="w-full h-full bg-accent rounded-full flex items-center justify-center text-white text-center p-4 text-[10px] font-black uppercase leading-tight group-hover:scale-110 transition-transform duration-500">
                            Work. <br/>Steadfast <br/>Reliability.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
                      {[
                        {
                          category: "Language Core",
                          label: "Python & Flask",
                          description: "The backbone of our data orchestration. Python manages the heavy lifting of feature processing while Flask provides a lightweight bridge for API communications."
                        },
                        {
                          category: "Model Engine",
                          label: "TensorFlow & Keras",
                          description: "Deep learning models trained on diverse datasets. We utilize transfer learning to adapt to different lighting conditions and skin tones automatically."
                        },
                        {
                          category: "Interface Layer",
                          label: "React & Tailwind",
                          description: "A responsive, high-precision UI designed for focus. Utilizing the latest in glassmorphism to provide a non-intrusive HUD for the translation feed."
                        },
                        {
                          category: "Computer Vision",
                          label: "MediaPipe Solutions",
                          description: "Cross-platform landmark tracking that runs efficiently on CPU, enabling mobile and tablet usage without significant thermal throttling."
                        }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          className="border-b border-gray-100 pb-12 group"
                          {...fadeIn}
                        >
                          <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-6 group-hover:translate-x-2 transition-transform">{item.category}</p>
                          <h4 className="text-3xl font-bold text-primary mb-4">{item.label}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="w-full bg-white border-t border-gray-100 py-16">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="text-xl font-bold text-primary">Gesture AI</div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest text-center md:text-left">
                    © 2025 Gesture AI. Precision Translation for Accessibility.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {["Privacy Policy", "Terms of Service", "Model Ethics", "API Docs", "Contact Support"].map((item) => (
                    <a 
                      key={item} 
                      href="#" 
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div 
  key="hub" 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.4 }}
  className="min-h-screen bg-gray-50 pt-32 pb-20"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left">
      <div>
        <div className="flex items-center gap-2 text-accent mb-4">
          <Activity size={20} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Neural Pipeline Online</span>
        </div>
        <h1 className="text-3xl lg:text-5xl font-black text-primary tracking-tight">Sign To Text</h1>
        <p className="text-gray-500 mt-2 font-medium">Real-time gesture analysis and semantic synthesis.</p>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="text-sm font-bold text-gray-600 font-sans">
            {isConnected ? "Connected to Server" : "Static Demo Mode"}
          </span>
        </div>
      </div>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 text-left">
      {/* Video Feed Side */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-2xl relative group">
          <div className="aspect-video bg-gray-900 relative">
            {/* Technical Overlays */}
            <div className="absolute inset-0 pointer-events-none opacity-40 z-10">
               <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-accent" />
               <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-accent" />
               <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-accent" />
               <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-accent" />
            </div>

            {/* DEVELOPER INSTRUCTIONS:
               To use your local Python backend:
               1. Uncomment the <img src="http://localhost:5000..." /> block below.
               2. Comment out the STATIC DEMO <img /> block below it.
            */}

            {/* --- LIVE FEED BLOCK (Uncomment to use locally) --- */}
            {/* <img 
              src={isConnected ? "http://localhost:5000/video_feed" : ""} 
              className="w-full h-full object-cover" 
              alt="Neural Feed" 
              onError={() => setIsConnected(false)}
            /> 
            */}

            {/* --- STATIC DEMO BLOCK (Comment this out when using Live Feed) --- */}
            <img 
              src="https://res.cloudinary.com/dsfkxbjrw/image/upload/f_auto,q_auto/v1778653379/example-live_t1engp.png"
              className="w-full h-full object-cover grayscale brightness-75"
              alt="Neural Feed Demo"
            />

            <div className="absolute top-4 left-5 z-20">
              <div className="bg-red-500/90 backdrop-blur px-2 py-1 rounded-lg text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                Live Hub
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20">
              <div className="flex gap-2">
                <button className="bg-white/10 backdrop-blur hover:bg-white/20 p-3 rounded-xl text-white transition-colors">
                  <Maximize2 size={20} />
                </button>
              </div>
              <div className="flex gap-4">
                <div className="text-white/60 text-[10px] font-mono">FR: 60FPS</div>
                <div className="text-white/60 text-[10px] font-mono">LAT: 0.12MS</div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-primary">
            <div className="flex flex-col sm:flex-row items-center justify-between text-white gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent rounded-xl text-white">
                  <Cpu size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Instruction</p>
                  <p className="font-bold">Toggle translation chat with a hand sign.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- STATUS MESSAGE (Below the card where your red line was) --- */}
        <div className="mt-6 flex items-center gap-3 px-2">
           <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
              <Video size={16} />
           </div>
           <p>
  Due to privacy constraints, <span className="font-bold text-gray-700"> the live feed is currently turned off.</span> 
 You can experience real-time detection by cloning the GitHub project and enabling it in your local environment.
  <a href="YOUR_GITHUB_LINK" className="text-blue-600 hover:underline"> GitHub </a> 
  and run it locally.
</p>
        </div>
      </div>

      {/* Output Side */}
      <div className="lg:col-span-5 h-full">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl h-full flex flex-col">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Languages size={18} strokeWidth={2.5} />
              Semantic Output
            </h4>
            <div className="text-[10px] font-bold text-accent px-3 py-1 bg-accent/10 rounded-full uppercase tracking-widest">
              High Confidence
            </div>
          </div>
          
          <div className="flex-1 p-8">
            <div className="h-full w-full bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-100 p-8 flex flex-col min-h-[300px]">
              <textarea 
                className="w-full flex-1 bg-transparent border-none focus:ring-0 text-3xl font-bold text-primary placeholder:text-gray-300 resize-none font-sans"
                placeholder="Detected gestures will appear here..."
                readOnly
                value={detectedSigns || "Hello, Gesture AI!"}
              />
              <div className="mt-8 flex justify-between items-center pt-8 border-t border-gray-100">
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-bold text-gray-500 transition-colors">Copy Text</button>
                  </div>
                <span className="text-[10px] font-mono text-gray-400 uppercase">
                  {detectedSigns ? `${detectedSigns.trim().split(/\s+/).length} Words` : "Demo Mode"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50 rounded-b-3xl">
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
              <Activity size={14} className="text-green-500" />
              System fully operational • 1,662 points active
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
