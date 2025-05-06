import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ChevronUp,
  Download,
  Award,
  ExternalLink,
  Code,
  PieChart,
  Server,
  Cpu,
  Zap,
  ChevronRight,
  Send,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Brain,
  Database,
  Rocket
} from "lucide-react";

// Dados
const skills = [
  "Python",
  "LangChain",
  "YOLOv8",
  "OpenAI",
  "Azure Speech",
  "React 19",
  "FastAPI",
  "Docker",
  "Make (Integromat)",
  "Zapier",
];

const projects = [
  {
    name: "VoxAgent – Assistente por Voz (IA)",
    description:
      "Agente de IA em Python + LangChain que responde por voz, reduzindo 70% dos tickets de help-desk.",
    impact: "−70% tickets",
    link: "https://voxagent-demo.vercel.app",
    repo: "https://github.com/seunome/voxagent",
    longDescription: "Desenvolvi um assistente virtual com reconhecimento e síntese de voz que resolve problemas comuns de TI. Utiliza LangChain para gerenciar o contexto das conversas e integra a API Azure Speech para converter fala em texto e vice-versa.",
    techStack: ["Python", "LangChain", "FastAPI", "Azure Speech API", "OpenAI API", "Docker"],
    challenges: "O principal desafio foi otimizar a latência da resposta por voz, resolvido com técnicas de streaming de áudio e processamento paralelo.",
    icon: <Cpu className="w-8 h-8 text-cyan-400" />
  },
  {
    name: "VisionPay – PDV por Visão Computacional",
    description:
      "App React Native + YOLOv8 que reconhece produtos pela câmera e gera recibos automaticamente.",
    impact: "−95% erros",
    link: "https://visionpay-demo.vercel.app",
    repo: "https://github.com/seunome/visionpay",
    longDescription: "Sistema de ponto de venda que utiliza a câmera do smartphone para identificar produtos automaticamente. Treinei um modelo YOLOv8 customizado com 5.000+ imagens de produtos e implementei um backend para processar pagamentos.",
    techStack: ["React Native", "Python", "YOLOv8", "TensorFlow", "FastAPI", "Docker"],
    challenges: "Treinar o modelo para reconhecer produtos com diferentes ângulos e iluminações, resolvido com técnicas de data augmentation e transfer learning.",
    icon: <PieChart className="w-8 h-8 text-purple-400" />
  },
  {
    name: "Dashboard de Licitações Automatizado",
    description:
      "Pipeline Python + LangChain que detecta editais do Diário Oficial com 97% de acurácia e economiza 4 h/dia.",
    impact: "+4 h/dia",
    link: "https://licitacoes-demo.vercel.app",
    repo: "https://github.com/seunome/dashboard-licitacoes",
    longDescription: "Desenvolvi um sistema que monitora diariamente o Diário Oficial, identifica novos editais relevantes usando NLP, extrai informações-chave e as apresenta em um dashboard interativo. Integra notificações via Slack e exportação para Excel.",
    techStack: ["Python", "LangChain", "React", "FastAPI", "PostgreSQL", "Docker", "Make (Integromat)"],
    challenges: "Classificar corretamente os editais relevantes em meio a centenas de publicações diárias, resolvido com fine-tuning de modelos de linguagem.",
    icon: <Server className="w-8 h-8 text-emerald-400" />
  },
];

const skillCategories = [
  {
    category: "Linguagens & Frameworks",
    skills: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "JavaScript", level: 75, icon: "🟨" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "FastAPI", level: 85, icon: "⚡" },
      { name: "SQL", level: 70, icon: "🗃️" },
    ]
  },
  {
    category: "IA & Machine Learning",
    skills: [
      { name: "LangChain", level: 85, icon: "🔗" },
      { name: "OpenAI API", level: 80, icon: "🧠" },
      { name: "YOLOv8", level: 75, icon: "👁️" },
      { name: "Azure Speech", level: 70, icon: "🎙️" },
      { name: "NLP", level: 65, icon: "📝" },
    ]
  },
  {
    category: "DevOps & Ferramentas",
    skills: [
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Git", level: 80, icon: "📊" },
      { name: "Make (Integromat)", level: 85, icon: "🔄" },
      { name: "Zapier", level: 80, icon: "⚡" },
      { name: "VSCode", level: 90, icon: "💻" },
    ]
  }
];

// Componente AboutSection
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Fundo gradiente sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Coluna esquerda - Foto e destaque */}
          <div className="lg:w-2/5">
            <div className="relative mb-6">
              {/* Substitua a URL pela sua foto real */}
              <div className="w-72 h-72 rounded-2xl overflow-hidden relative mx-auto">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Karen Vasconcelos" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-700/50 to-transparent"></div>
              </div>
              
              {/* Decoração - circulos com gradiente */}
              <div className="absolute -z-10 top-10 -left-10 w-24 h-24 rounded-full bg-cyan-500/20 blur-xl"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-white">Minha Jornada em Resumo:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Autodidata em programação há 2 anos com foco em Python e IA</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Concluí 7 cursos especializados em desenvolvimento web e IA</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Desenvolvi 3 projetos completos com impacto quantificável</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Participante ativa em comunidades de código aberto</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Coluna direita - Texto sobre mim */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold mb-6">
              Sobre <span className="text-cyan-400">Mim</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Olá! Sou <strong>Karen Vasconcelos</strong>, desenvolvedora júnior apaixonada por resolver problemas reais usando tecnologia. Minha jornada começou com a curiosidade sobre como a Inteligência Artificial poderia automatizar processos repetitivos que eu observava diariamente.
            </p>
            
            <p className="text-gray-300 mb-8">
              Após estudar intensivamente Python e suas aplicações em IA por dois anos, consegui criar soluções completas que já estão em uso e gerando resultados mensuráveis. Meu foco está em desenvolver agentes de IA que otimizam fluxos de trabalho e análise de dados, conectando conhecimentos de back-end e front-end para criar experiências úteis e intuitivas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-cyan-500/20 p-2 rounded-lg">
                    <Brain className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold">Foco em IA</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Especializada em LangChain e OpenAI para criar agentes inteligentes com contexto.
                </p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Code className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-semibold">Full Stack</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Desenvolvo do back-end em Python/FastAPI ao front-end em React para criar soluções completas.
                </p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Database className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold">Dados</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Experiência em análise de dados, visualização e construção de dashboards interativos.
                </p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <Rocket className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-semibold">Automação</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Crio fluxos de automação com Make e Zapier que integram várias plataformas.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold text-lg">Formação Relevante</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="bg-gray-800/40 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <h4 className="font-medium text-cyan-300">Especialização em Inteligência Artificial Aplicada</h4>
                <p className="text-sm text-gray-400">Coursera | Conclusão 2024</p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <h4 className="font-medium text-cyan-300">Desenvolvimento Web Full Stack</h4>
                <p className="text-sm text-gray-400">Udemy | Conclusão 2023</p>
              </div>
              
              <div className="bg-gray-800/40 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
                <h4 className="font-medium text-cyan-300">Data Science e Análise de Dados com Python</h4>
                <p className="text-sm text-gray-400">DataCamp | Conclusão 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente SkillBar para EnhancedSkillsSection
const SkillBar = ({ skill, category }) => {
  const colors = {
    "Linguagens & Frameworks": {
      bg: "from-cyan-600/20 to-cyan-600/5",
      fill: "bg-cyan-500",
      text: "text-cyan-400"
    },
    "IA & Machine Learning": {
      bg: "from-purple-600/20 to-purple-600/5",
      fill: "bg-purple-500",
      text: "text-purple-400"
    },
    "DevOps & Ferramentas": {
      bg: "from-emerald-600/20 to-emerald-600/5",
      fill: "bg-emerald-500",
      text: "text-emerald-400"
    }
  };

  const color = colors[category];

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className={`font-medium ${color.text}`}>{skill.name}</span>
        </div>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className={`h-2 rounded-full bg-gradient-to-r ${color.bg}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color.fill}`}
        />
      </div>
    </div>
  );
};

// Componente EnhancedSkillsSection
const EnhancedSkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-900 to-gray-900" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Minhas <span className="text-cyan-400">Habilidades</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Competências técnicas que desenvolvi através de projetos pessoais, cursos e
            autoestudo contínuo, com foco em desenvolvimento com IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{category.category}</h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} category={category.category} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Outras Tecnologias que Conheço</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Node.js", "Express", "MongoDB", "PostgreSQL", "HTML5/CSS3", "Tailwind CSS", 
              "Git/GitHub", "Heroku", "Vercel", "Figma", "Postman", "AWS (básico)"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gray-800/40 text-sm backdrop-blur-sm
                 border border-gray-700/30 hover:border-gray-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-300">Aprendizado Rápido</h3>
            <p className="text-sm text-gray-300">
              Capacidade de adquirir novas habilidades e tecnologias de forma eficiente e aplicá-las em projetos reais.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Resolução de Problemas</h3>
            <p className="text-sm text-gray-300">
              Abordagem analítica para identificar desafios e desenvolver soluções eficazes com as tecnologias adequadas.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="text-lg font-semibold mb-2 text-emerald-300">Colaboração</h3>
            <p className="text-sm text-gray-300">
              Comunicação clara e eficiente, com disposição para compartilhar conhecimento e trabalhar em equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente EnhancedProjectsSection
const EnhancedProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Projetos <span className="text-cyan-400">Destacados</span>
      </h2>
      <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto">
        Aplicações reais desenvolvidas do zero, demonstrando minhas habilidades em criar soluções 
        completas com foco em IA, análise de dados e automação.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer
              ${activeProject === idx ? 'border-cyan-400 shadow-cyan-500/30' : 'border-transparent hover:border-gray-700'}`}
            onClick={() => setActiveProject(activeProject === idx ? null : idx)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="bg-gray-900/60 p-3 rounded-xl">
                {project.icon}
              </div>
              <span className="text-emerald-400 text-xs bg-emerald-900/40 px-2 py-1 rounded-full">
                {project.impact}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              {project.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4 min-h-[66px]">
              {project.description}
            </p>
            <div className="flex items-center gap-1 text-cyan-400 text-sm font-medium">
              Ver detalhes
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeProject === idx ? 'rotate-90' : ''}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {activeProject !== null && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {projects[activeProject].name}
              </h3>
              <p className="mb-6 text-gray-300">
                {projects[activeProject].longDescription}
              </p>
              
              <h4 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Desafios Superados
              </h4>
              <p className="mb-6 text-gray-300">
                {projects[activeProject].challenges}
              </p>
              
              <div className="flex gap-4 mb-8">
                <a
                  href={projects[activeProject].link}
                  target="_blank"
                  rel="noopener"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg flex items-center gap-2 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" /> Ver Demo
                </a>
                <a
                  href={projects[activeProject].repo}
                  target="_blank"
                  rel="noopener"
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg flex items-center gap-2 text-sm font-medium"
                >
                  <Github className="w-4 h-4" /> Ver Código
                </a>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-orange-400" />
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/60 text-gray-300 rounded-lg text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="bg-gray-900/60 p-4 rounded-xl">
                <div className="text-xs text-gray-400 mb-2">IMPACTO QUANTIFICADO</div>
                <div className="text-2xl font-bold text-emerald-400">
                  {projects[activeProject].impact}
                </div>
                <div className="text-sm text-gray-300 mt-1">
                  {projects[activeProject].impact.includes("tickets") && "Redução em tickets de suporte"}
                  {projects[activeProject].impact.includes("erros") && "Redução em erros de registro"}
                  {projects[activeProject].impact.includes("h/dia") && "Economia de tempo diária"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      <div className="text-center">
        <a 
          href="https://github.com/KaVsDevs" 
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-colors text-sm"
        >
          <Github className="w-4 h-4" />
          Ver mais projetos no GitHub
        </a>
      </div>
    </section>
  );
};

// Componente ContactSection
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio - em produção conecte com um backend real
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };
  
  return (
    <>
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-800/80 to-gray-900" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Vamos <span className="text-cyan-400">Conversar</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Estou aberta a oportunidades de trabalho, projetos colaborativos
              ou apenas para trocar ideias sobre tecnologia e desenvolvimento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário de contato */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Envie uma mensagem</h3>
              
              {formStatus === "success" ? (
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Send className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Mensagem enviada com sucesso!
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Obrigada pelo contato! Responderei o mais breve possível.
                  </p>
                  <button
                    onClick={() => setFormStatus(null)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Como posso te chamar?"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Seu email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Para que eu possa responder"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Sua mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Como posso te ajudar? Conte-me sobre sua empresa ou projeto."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" /> Enviar mensagem
                  </button>
                </form>
              )}
            </div>
            
            {/* Informações de contato e links */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-5 text-white">Outras formas de contato</h3>
                
                <div className="space-y-4 mb-8">
                  <a href="kmvcpp@gmail.com" className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700/50 group transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">email@dominio.com</p>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700/50 group transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">LinkedIn</h4>
                      <p className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">linkedin.com/in/seunome</p>
                    </div>
                  </a>
                  
                  <a href="https://github.com/KaVsDevs" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700/50 group transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Github className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">GitHub</h4>
                      <p className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">github.com/seunome</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Call to action */}
              <div className="mt-6">
                <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 rounded-xl p-6 backdrop-blur-sm border border-cyan-800/30">
                  <h4 className="text-lg font-semibold mb-3 text-white">Vamos trabalhar juntos!</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Busco uma oportunidade para aplicar minhas habilidades em Python, IA e desenvolvimento web para criar soluções inovadoras.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://calendly.com/seu-link" 
                      target="_blank"
                      rel="noopener"
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" /> Agendar uma call
                    </a>
                    <a 
                      href="/Curriculo_FullStack_Jr.pdf" 
                      target="_blank"
                      rel="noopener"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Baixar CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer Aprimorado */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold text-white mb-1">Karen Vasconcelos</h3>
              <p className="text-sm text-gray-400">Desenvolvedora Full Stack Júnior</p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="kmvcpp@gmail.com" 
                className="text-gray-400 hover:text-cyan-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/KaVsDevs" 
                target="_blank"
                rel="noopener"
                className="text-gray-400 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank"
                rel="noopener"
                className="text-gray-400 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Karen Vasconcelos. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#about" className="text-xs text-gray-500 hover:text-gray-300">Sobre</a>
              <a href="#projects" className="text-xs text-gray-500 hover:text-gray-300">Projetos</a>
              <a href="#contact" className="text-xs text-gray-500 hover:text-gray-300">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// Componente principal App
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased overflow-x-hidden">
      {/* Navegação */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-cyan-400">Karen.dev</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-300 hover:text-white">Sobre</a>
              <a href="#skills" className="text-gray-300 hover:text-white">Habilidades</a>
              <a href="#projects" className="text-gray-300 hover:text-white">Projetos</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contato</a>
              <a 
                href="/Curriculo_FullStack_Jr.pdf" 
                target="_blank"
                rel="noopener"
                className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg font-medium flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> CV
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed right-0 top-0 h-full w-2/3 bg-gray-800 p-6 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
                
                <nav className="flex flex-col gap-6">
                  <a 
                    href="#about" 
                    className="text-lg font-medium text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </a>
                  <a 
                    href="#skills" 
                    className="text-lg font-medium text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Habilidades
                  </a>
                  <a 
                    href="#projects" 
                    className="text-lg font-medium text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projetos
                  </a>
                  <a 
                    href="#contact" 
                    className="text-lg font-medium text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </a>
                </nav>
                
                <div className="mt-auto">
                  <a 
                    href="/Curriculo_FullStack_Jr.pdf" 
                    target="_blank"
                    rel="noopener"
                    className="w-full py-3 flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-500 rounded-xl font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Download className="w-5 h-5" /> Baixar CV
                  </a>
                  
                  <div className="flex justify-center gap-8 mt-8">
                    <a href="kmvcpp@gmail.com" className="text-gray-400 hover:text-cyan-400">
                      <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/KaVsDevs" target="_blank" rel="noopener" className="text-gray-400 hover:text-cyan-400">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" className="text-gray-400 hover:text-cyan-400">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-32 px-4 min-h-screen justify-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-700/30 via-purple-700/20 to-transparent animate-pulse-slow" />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex flex-col md:flex-row items-center gap-3"
        >
          <span className="text-cyan-400">Karen Vasconcelos</span>
          <span className="text-sm bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1 mt-2 md:mt-0">
            <Award className="w-4 h-4" /> Desenvolvedora Full Stack Jr.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-2xl text-gray-300 mb-8 text-lg"
        >
          Especialista em <strong className="text-white">Python</strong>,{" "}
          <strong className="text-white">Inteligência Artificial</strong> e{" "}
          <strong className="text-white">Análise de Dados</strong>. Crio sistemas completos
          com agentes de IA e automações no <strong className="text-white">Make</strong> e{" "}
          <strong className="text-white">Zapier</strong>. Buscando minha primeira
          oportunidade para aplicar esses conhecimentos e crescer junto ao time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 font-semibold shadow-lg"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold"
          >
            Fale Comigo
          </a>
        </motion.div>

        {/* Tecnologias no Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="text-sm text-gray-400 mb-3">ESPECIALIZADA EM:</div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Social Icons */}
        <div className="mt-14 flex gap-6">
          <a
            aria-label="Email"
            href="kmvcpp@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/KaVsDevs"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-2">Rolar para ver mais</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Adicionar as seções que criamos - agora incorporadas diretamente */}
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="skills">
        <EnhancedSkillsSection />
      </div>
      
      <div id="projects">
        <EnhancedProjectsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Botão Voltar ao Topo */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed right-6 bottom-6 z-40 p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}