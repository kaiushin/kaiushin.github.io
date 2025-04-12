import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight">
            U Shin
          </a>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up">U Shin</h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up animation-delay-100">
            Software Engineer
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 animate-slide-up animation-delay-200">
            I specialize in hardware and embedded software. My focus includes Real-Time Operating Systems (RTOS),
            Internet of Things (IoT), and Field-Programmable Gate Arrays (FPGAs).
          </p>

          <div className="flex justify-center gap-4 animate-slide-up animation-delay-300">
            <a
              href="https://www.linkedin.com/in/u-shin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ushin010@gmail.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ushin-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-emerald-500/20">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="U Shin"
                  width={256}
                  height={256}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-10 h-1 bg-emerald-500 mr-4"></span>
                About Me
              </h2>

              <p className="text-gray-300 mb-6">
                I am a passionate Software Engineer with expertise in hardware and embedded systems. My journey in
                technology has been driven by a fascination with the intersection of hardware and software, where I've
                developed skills in creating seamless integrations for various applications.
              </p>

              <p className="text-gray-300 mb-6">
                With a strong foundation in Real-Time Operating Systems (RTOS), Internet of Things (IoT), and
                Field-Programmable Gate Arrays (FPGAs), I bring a unique perspective to solving complex engineering
                challenges.
              </p>

              <div className="flex gap-4 mt-8">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                >
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-600 hover:border-emerald-500 rounded-md transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="inline-block w-10 h-1 bg-emerald-500 mb-2"></span>
            <span className="block">Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Rust</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">C</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">C++</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">ARM</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">VHDL</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Verilog</span>
              </div>
            </div>

            {/* Tools & Software */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">VSCode</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">GDB</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Makefile</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Vivado</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Quartus II</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Altium Designer</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">CCStudio</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Multisim</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Git</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Ubuntu</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Android</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">Arduino</span>
                <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">ESP32</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center text-emerald-400">Relevant Courses</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-md">Computer Architecture</span>
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-md">
                HDL Based Digital Design with Programmable Logic
              </span>
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-md">Systems Programming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="inline-block w-10 h-1 bg-emerald-500 mb-2"></span>
            <span className="block">Featured Projects</span>
          </h2>

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="p-1 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2 text-white">IoT Remote Control Car</h3>
                    <p className="text-gray-300 mb-4">
                      This project utilizes an ESP32 microcontroller with Bluetooth capabilities, allowing your
                      smartphone to connect to an app that emulates a physical controller.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-emerald-400">Key Focus Areas</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      <li>Hardware Integration</li>
                      <li>Programming</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-emerald-400">Development Process</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      <li>Disassembled a Walmart RC car while retaining its motor driver and microcontroller</li>
                      <li>Replaced the internal microcontroller with a more powerful ESP32</li>
                      <li>Utilized the existing motor driver for precise control of car movements</li>
                      <li>Connected the soldered wires to GPIO pins on the ESP32</li>
                      <li>Programmed the system using Arduino IDE to establish inputs and outputs</li>
                      <li>Incorporated Bluetooth functionality using ESP32 documentation code</li>
                      <li>Added LED indicators for Bluetooth mode and audio feedback for control actions</li>
                    </ul>

                    <a href="#" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                      View Details <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="IoT Remote Control Car"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Blender Digital Twin"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="p-1 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2 text-white">Blender Digital Twin</h3>
                    <p className="text-gray-300 mb-4">
                      Created a physical model of a blender digital twin with various speed settings, camera views, and
                      communication capabilities.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-emerald-400">Key Focus Areas</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      <li>Mechanical Design</li>
                      <li>Hardware Control</li>
                      <li>On-Board Communications</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-emerald-400">Development Process</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      <li>Designed a physical blender to enable remote control</li>
                      <li>Integrated hardware components into a functional system</li>
                      <li>Developed code to control motors, accelerometers, communications, and cameras</li>
                      <li>Enabled ESP32 Cam communication with the server and Wi-Fi</li>
                      <li>Established seamless communications between ESP32 and Arduino</li>
                    </ul>

                    <a href="#" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                      View Details <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="p-1 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2 text-white">RGB Toothbrush</h3>
                    <p className="text-gray-300 mb-4">
                      Added a timer to an electric toothbrush and incorporated RGB lighting to indicate the timer's
                      start and end.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 text-emerald-400">Key Focus Areas</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      <li>Electronics</li>
                      <li>Hardware Integration</li>
                      <li>Programming</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-emerald-400">Development Process</h4>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      <li>Added vibrant RGB lighting to enhance the toothbrushing experience</li>
                      <li>Incorporated a timer feature using Arduino IDE and C++</li>
                      <li>Utilized components including Arduino UNO, breadboard, DC power source, and L293D IC</li>
                      <li>Implemented a 555 timer IC for precise timing control</li>
                      <li>Created seamless interaction between hardware components and C++ instructions</li>
                    </ul>

                    <a href="#" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                      View Details <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="RGB Toothbrush"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="inline-block w-10 h-1 bg-emerald-500 mb-2"></span>
            <span className="block">Get In Touch</span>
          </h2>

          <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-lg border border-gray-800">
            <p className="text-center text-gray-300 mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out through
              any of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <a
                href="mailto:ushin@buffalo.edu"
                className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-sm text-gray-400">ushin@buffalo.edu</p>
              </a>

              <a
                href="https://www.linkedin.com/in/u-shin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-medium mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-400">Connect with me</p>
              </a>

              <a
                href="https://github.com/ushin-cse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Github className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-medium mb-2">GitHub</h3>
                <p className="text-sm text-gray-400">View my projects</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} U Shin. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-500 hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
