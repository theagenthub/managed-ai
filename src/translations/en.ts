export const translations = {
  header: {
    nav: {
      services: "Services",
      security: "Security",
      features: "Features",
      contact: "Contact",
    },
    language: "עברית",
  },
  hero: {
    title: "Professional-Grade AI",
    subtitle: "Domain-specific AI infrastructure for law firms in Israel",
    description: "Enterprise-grade secure AI platform designed specifically for legal professionals. Not the same as using ChatGPT carefully—a private, controlled, and compliant environment that protects client data and meets the highest security standards.",
    cta: "Request a Demo",
    ctaSecondary: "Learn More",
  },
  security: {
    title: "What 'Secure AI' Means for Your Law Firm",
    subtitle: "Our security guarantees go beyond standard AI tools",
    description: "This is not the same as using ChatGPT carefully. We provide enterprise-grade secure infrastructure designed specifically for legal professionals.",
    guarantees: [
      {
        title: "Zero Data Leakage",
        description: "Client data never leaks to public models or other customers",
      },
      {
        title: "No Data Training",
        description: "No training on your data - ever. Your data remains completely private.",
      },
      {
        title: "Full Auditability",
        description: "Complete visibility into who asked what, when, and why",
      },
      {
        title: "Privilege-Aware Access",
        description: "Case-level isolation with granular access controls",
      },
      {
        title: "Full Compliance",
        description: "Compliant with GDPR, Israeli Privacy Protection Law, and Bar Association ethics requirements",
      },
    ],
  },
  supportedModels: {
    title: "Connect to Leading AI Models",
    subtitle: "Access the best AI models securely through our infrastructure",
    description: "We provide secure, private access to all major AI models. Your data stays protected while you leverage the power of leading AI technology.",
    securedConnection: "Secured Connection",
  },
  services: {
    title: "Our Services",
    subtitle: "Complete AI infrastructure for modern law firms",
    items: [
      {
        title: "Private LLM Access",
        description: "Secure, private access to advanced language models - like ChatGPT but fully secured and controlled within your environment",
      },
      {
        title: "Observability & Governance",
        description: "Complete visibility into how employees use AI in your organization - track both costs and data usage with detailed analytics",
      },
      {
        title: "Private RAG System",
        description: "Intelligent document search that finds relevant information from your organization's documents to provide contextualized, accurate answers",
      },
      {
        title: "Custom Agent Development",
        description: "Build proprietary AI agents tailored to your firm's specific needs - from case management to client communication workflows",
      },
      {
        title: "Deep Document Research",
        description: "Advanced AI-powered research on your proprietary documents, extracting insights, patterns, and recommendations from your legal knowledge base",
      },
      {
        title: "Litigation Recommendations",
        description: "AI-driven analysis and recommendations for litigation strategy, case precedents, and risk assessment based on your firm's historical data",
      },
      {
        title: "Proprietary Tools",
        description: "Custom-built tools for legal professionals including document summarization, email preparation, contract analysis, and more",
      },
      {
        title: "Local Law Integration",
        description: "Connected to Israeli law and regulation databases, ensuring your AI understands local legal context and requirements",
      },
    ],
    details: {
      privateLLM: {
        title: "Private LLM Access",
        subtitle: "Secure access to advanced AI models",
        overview: "Access cutting-edge language models like ChatGPT, Claude, and Gemini through a fully secure, private infrastructure designed for law firms. Unlike public AI services, our private LLM infrastructure ensures that your sensitive client data never leaves your controlled environment. Every interaction is encrypted, logged, and completely isolated from other users.",
        detailedDescription: "Our Private LLM Access service provides law firms with enterprise-grade access to the world's most advanced language models without compromising security or client confidentiality. The infrastructure is deployed within your organization's secure network, ensuring complete data isolation. All AI interactions are encrypted end-to-end, and no training data is ever used to improve public models. This means you get the full power of modern AI while maintaining the strictest security and compliance standards required for legal practice.",
        useCases: [
          {
            title: "Client Communication",
            description: "Draft professional emails and communications to clients without exposing sensitive information to public AI services. The AI can help you compose clear, professional correspondence while ensuring client names, case details, and confidential information remain completely private. Perfect for responding to client inquiries, providing case updates, and managing client relationships efficiently.",
          },
          {
            title: "Document Analysis",
            description: "Analyze contracts, legal briefs, and case documents using advanced AI while maintaining complete data privacy. Upload any legal document - from complex merger agreements to litigation briefs - and get instant analysis of key terms, potential risks, and important clauses. The AI understands legal terminology and can identify inconsistencies, missing elements, and areas requiring attention, all without your documents ever leaving your secure environment.",
          },
          {
            title: "Legal Research Assistance",
            description: "Get AI-powered research assistance for legal questions, case law analysis, and regulatory compliance checks. Ask complex legal questions in natural language and receive detailed, cited responses. The AI can help you identify relevant precedents, understand regulatory requirements, and prepare comprehensive research briefs. This accelerates your research process while maintaining the high standards expected in legal practice.",
          },
          {
            title: "Contract Drafting",
            description: "Generate initial drafts of legal contracts and agreements based on your templates and requirements. The AI can help structure contracts, suggest appropriate clauses, and ensure consistency with your firm's standard practices. All generated content remains within your private infrastructure, allowing you to leverage AI productivity while maintaining complete control over client work product.",
          },
        ],
        benefits: [
          "Zero data leakage to public models - your data never leaves your environment",
          "Full control over AI access and usage with granular permissions",
          "Compliance with GDPR, Israeli Privacy Protection Law, and Bar Association requirements",
          "Enterprise-grade security with end-to-end encryption and audit logs",
          "Access to multiple leading AI models (ChatGPT, Claude, Gemini) in one platform",
          "No usage restrictions or rate limits that hinder productivity",
          "Customizable model configurations for your firm's specific needs",
        ],
        howItWorks: "Our Private LLM infrastructure is deployed within your organization's secure network or in a dedicated cloud environment with strict access controls. When you or your team interact with the AI, all requests are processed locally or through encrypted connections to isolated compute resources. Your data is never stored on public AI provider servers, and no information is used to train or improve public models. All interactions are logged for audit purposes, giving you complete visibility into AI usage across your firm.",
      },
      observability: {
        title: "Observability & Governance",
        subtitle: "Complete visibility and control",
        overview: "Monitor and manage AI usage across your entire organization with detailed analytics, cost tracking, and governance controls. Know exactly how AI is being used, who is using it, what data is being accessed, and how much it costs. Our observability platform provides comprehensive insights that help you optimize AI usage while maintaining strict governance and compliance standards.",
        detailedDescription: "Effective AI governance requires complete visibility into how AI tools are being used across your organization. Our Observability & Governance platform provides real-time monitoring, detailed analytics, and comprehensive controls for all AI interactions. Track usage patterns, monitor costs, enforce policies, and maintain detailed audit trails for compliance. With role-based access controls and customizable policies, you can ensure that AI is used appropriately and efficiently throughout your firm.",
        useCases: [
          {
            title: "Usage Analytics",
            description: "Track which employees use AI tools, when, and for what purposes with comprehensive usage dashboards. See real-time metrics showing AI usage by department, project, or individual user. Identify high-value use cases, spot inefficiencies, and understand how AI is transforming work across your organization. Detailed analytics help you make informed decisions about AI strategy and resource allocation.",
          },
          {
            title: "Cost Management",
            description: "Monitor AI usage costs in real-time and set budgets to control spending across departments and projects. Get detailed cost breakdowns showing spending by model type, department, or use case. Set budget alerts to prevent overspending, and use forecasting tools to predict future costs. This financial visibility ensures AI investments align with business priorities and ROI expectations.",
          },
          {
            title: "Compliance Auditing",
            description: "Maintain detailed audit logs of all AI interactions for compliance reporting and risk management. Every AI query, document access, and response is logged with timestamps, user information, and content summaries. These audit trails are essential for demonstrating compliance with data protection regulations, Bar Association requirements, and internal policies. Export audit logs in standard formats for compliance reporting and risk assessments.",
          },
          {
            title: "Policy Enforcement",
            description: "Enforce AI usage policies across your organization with automated controls and alerts. Set rules for which AI models can be used for different types of work, restrict access to sensitive data, and require approvals for high-risk operations. Policy violations trigger immediate alerts, allowing you to maintain governance while enabling productive AI use.",
          },
        ],
        benefits: [
          "Real-time usage monitoring with customizable dashboards and alerts",
          "Detailed cost breakdowns and forecasting tools for budget planning",
          "Compliance-ready audit trails with exportable logs in standard formats",
          "Role-based access controls and customizable usage policies",
          "Automatic anomaly detection to identify unusual or suspicious activity",
          "Integration with existing compliance and risk management systems",
          "Historical analytics to track trends and measure AI adoption over time",
        ],
        howItWorks: "Our Observability platform automatically collects data from all AI interactions across your organization. This includes usage metrics, cost information, query content, and user details. The data is securely stored and analyzed in real-time, providing dashboards and reports that give you complete visibility. You can set up alerts for specific events, export data for external analysis, and configure policies that automatically enforce governance rules. All data collection and processing happens within your secure environment to maintain privacy and compliance.",
      },
      privateRAG: {
        title: "Private RAG System",
        subtitle: "Intelligent document search and retrieval",
        overview: "Search across your firm's entire document library with AI-powered semantic search that understands context and legal terminology. Our Private RAG (Retrieval-Augmented Generation) system transforms how you find and use information from your firm's knowledge base. Instead of keyword searches that return irrelevant results, our system understands the meaning and context of your queries, delivering precisely the information you need.",
        detailedDescription: "The Private RAG System uses advanced AI to create intelligent indexes of your entire document repository, understanding not just keywords but concepts, relationships, and legal contexts. When you ask a question, the system searches through thousands of documents in seconds, finding relevant information even when it's expressed differently than your query. The AI then synthesizes information from multiple sources to provide comprehensive, contextualized answers. All document access respects your existing permissions, ensuring lawyers only see documents they're authorized to access.",
        useCases: [
          {
            title: "Case Precedent Search",
            description: "Quickly find relevant case precedents and legal decisions from your firm's historical cases and research database. Search using natural language questions like 'How have we handled similar breach of contract cases?' and get instant access to relevant past cases, including case summaries, outcomes, and key legal arguments. This saves countless hours of manual research and helps you build stronger cases based on your firm's proven strategies.",
          },
          {
            title: "Contract Template Discovery",
            description: "Locate existing contract templates and clauses that match your current requirements, saving hours of manual searching. Simply describe the type of contract or clause you need, and the system searches through all your templates and past contracts to find the best matches. Review variations and adaptations used in different contexts, helping you draft contracts more efficiently while maintaining consistency with your firm's standards.",
          },
          {
            title: "Client History Analysis",
            description: "Access and analyze past client communications, contracts, and case files to provide informed legal advice. When preparing for client meetings or providing ongoing counsel, quickly review the complete history of your relationship with that client. The system can summarize key events, past agreements, ongoing matters, and important communications, giving you comprehensive context to provide better, more informed advice.",
          },
          {
            title: "Regulatory Research Across Documents",
            description: "Find all references to specific regulations, laws, or compliance requirements across your entire document library. Whether you're preparing for a regulatory review or need to understand how a new law affects existing contracts, the RAG system can find every relevant mention and provide context on how your firm has handled similar regulatory matters in the past.",
          },
        ],
        benefits: [
          "Semantic search understands legal context and terminology, not just keywords",
          "Searches across all firm documents securely with encrypted indexing",
          "Returns contextualized, relevant results ranked by relevance and recency",
          "Respects document access permissions and security classifications",
          "Supports multiple document formats including PDFs, Word, emails, and case management systems",
          "Continuously learns from your document corpus to improve search relevance",
          "Provides source citations so you can verify and reference original documents",
        ],
        howItWorks: "The Private RAG System uses advanced embedding models to create vector representations of your documents that capture their semantic meaning. When you ask a question, your query is also converted to a vector, and the system finds documents with similar meanings using similarity search. The most relevant document chunks are then fed to a language model that generates a comprehensive answer, citing the source documents. All processing happens within your secure environment, and documents are indexed with respect to existing access controls, ensuring that search results only include documents each user is authorized to view.",
      },
      customAgents: {
        title: "Custom Agent Development",
        subtitle: "Build proprietary AI agents for your firm",
        overview: "Create custom AI agents tailored to your firm's specific workflows, from case management to client onboarding processes. These intelligent agents automate repetitive tasks, handle routine processes, and augment your team's capabilities, all while working within your secure, controlled environment. Each agent is designed specifically for your firm's unique needs and integrates seamlessly with your existing systems and processes.",
        detailedDescription: "Custom AI agents are specialized AI systems designed to handle specific tasks and workflows within your law firm. Unlike general-purpose AI assistants, custom agents are built to understand your firm's processes, terminology, and requirements. They can automate complex workflows, make intelligent decisions based on rules and context, and interact with your existing systems. Our team works with you to identify automation opportunities, design agents that fit your workflows, and deploy them securely within your infrastructure. Agents can handle everything from simple task automation to complex decision-making processes.",
        useCases: [
          {
            title: "Case Management Automation",
            description: "Deploy AI agents that automatically organize case files, track deadlines, and send reminders to legal teams. The agent monitors case status, identifies approaching deadlines, prioritizes tasks, and sends automated reminders to relevant team members. It can also automatically file documents in the correct case folders, extract key information from case documents, and update case management systems. This eliminates manual administrative work and ensures nothing falls through the cracks.",
          },
          {
            title: "Client Onboarding Agent",
            description: "Create agents that guide new clients through intake processes, collect necessary information, and schedule consultations. The agent can interact with new clients through a secure portal, asking relevant questions based on the type of legal matter, collecting required documentation, and providing initial information about the process. It can automatically check for conflicts of interest, schedule initial consultations with appropriate attorneys, and prepare intake summaries for the legal team. This streamlines onboarding and improves the client experience.",
          },
          {
            title: "Document Classification Agent",
            description: "Automatically categorize and route incoming documents to appropriate legal teams based on content and context. When documents arrive via email, file upload, or case management system, the agent analyzes the content, identifies the document type (contract, legal brief, correspondence, etc.), determines which matter it relates to, and routes it to the appropriate team member. This ensures documents are handled quickly and efficiently, reducing the time between document receipt and action.",
          },
          {
            title: "Contract Review Agent",
            description: "Build agents that perform initial contract reviews, flagging unusual clauses, identifying potential risks, and comparing contracts against your firm's standard templates. The agent can review contracts 24/7, providing initial assessments that help attorneys focus on the most important issues. It learns from your firm's review history to improve its ability to identify issues relevant to your practice areas and client needs.",
          },
        ],
        benefits: [
          "Tailored to your firm's specific needs and workflows",
          "Integrates seamlessly with existing case management and document systems",
          "Improves efficiency by automating repetitive, time-consuming tasks",
          "Continuously learns and improves from usage patterns and feedback",
          "Maintains complete security and compliance within your controlled environment",
          "Scalable architecture that can handle growing workloads",
          "Customizable to adapt as your firm's processes evolve",
        ],
        howItWorks: "Custom Agent Development begins with understanding your firm's workflows and identifying automation opportunities. Our team collaborates with your staff to design agents that enhance rather than replace human expertise. Agents are built using a combination of AI models, business logic, and integrations with your existing systems. They're tested thoroughly in your environment before deployment, and can be refined based on real-world usage. Agents operate within your secure infrastructure, respecting all access controls and data privacy requirements. They can be configured to require human approval for critical decisions, ensuring human oversight where necessary while automating routine operations.",
      },
      deepResearch: {
        title: "Deep Document Research",
        subtitle: "Advanced AI-powered document analysis",
        overview: "Extract insights, patterns, and recommendations from your proprietary legal documents using advanced AI analysis techniques. Our Deep Document Research service goes beyond simple search to provide comprehensive analysis of your entire document corpus. Discover hidden patterns, identify trends, and gain strategic insights that would take months of manual analysis to uncover.",
        detailedDescription: "Deep Document Research uses sophisticated AI algorithms to analyze your entire document library, identifying patterns, trends, and insights that aren't apparent from individual document review. The system can process thousands of documents simultaneously, extracting structured information, comparing documents, identifying anomalies, and generating comprehensive reports. This enables strategic analysis at scale, helping you understand your firm's historical practices, identify optimization opportunities, and make data-driven decisions about legal strategy, pricing, and resource allocation.",
        useCases: [
          {
            title: "Contract Analysis",
            description: "Analyze hundreds of contracts to identify common clauses, risk patterns, and negotiation trends across your portfolio. The system can identify which contract terms are most frequently negotiated, which clauses lead to disputes, and how contract structures vary across different deal types. This analysis helps you standardize successful contract patterns, identify problematic clauses, and improve your contract negotiation strategies based on historical data.",
          },
          {
            title: "Legal Strategy Insights",
            description: "Review historical case outcomes to identify successful legal strategies and approaches used by your firm. Analyze which arguments, approaches, and strategies have been most effective in different types of cases. Understand how case characteristics correlate with outcomes, helping you make better decisions about case strategy, settlement timing, and resource allocation. This data-driven approach to strategy development leverages your firm's accumulated expertise.",
          },
          {
            title: "Regulatory Change Impact",
            description: "Assess how regulatory changes affect existing contracts and legal documents in your knowledge base. When new regulations are introduced, the system can scan all your contracts and documents to identify which ones are impacted, how they're affected, and what changes may be required. This proactive approach helps you stay ahead of compliance requirements and avoid potential issues before they arise.",
          },
          {
            title: "Client Relationship Analysis",
            description: "Analyze client communication patterns, contract terms, and case outcomes to understand client relationships and preferences. Identify which clients have the most complex needs, which relationships are most profitable, and how client characteristics correlate with case types and outcomes. This analysis helps inform client acquisition strategies, relationship management, and resource planning.",
          },
        ],
        benefits: [
          "Processes thousands of documents quickly, completing in hours what would take months manually",
          "Identifies patterns and correlations that humans might miss across large datasets",
          "Generates actionable insights and recommendations with supporting evidence",
          "Maintains complete document privacy with all processing within your secure environment",
          "Provides comprehensive reports with visualizations and detailed findings",
          "Supports multiple analysis types including statistical analysis, pattern recognition, and trend identification",
          "Can be customized for specific research questions and analysis objectives",
        ],
        howItWorks: "Deep Document Research uses advanced natural language processing and machine learning to analyze your document corpus. Documents are processed to extract structured information, identify entities and relationships, and create searchable indexes. The system then applies various analysis techniques including statistical analysis, clustering, and pattern recognition to identify trends and insights. Analysis can be customized for specific research questions, and results are presented in comprehensive reports with visualizations and supporting evidence. All processing happens within your secure environment, ensuring complete privacy and compliance.",
      },
      litigation: {
        title: "Litigation Recommendations",
        subtitle: "AI-driven litigation strategy and analysis",
        overview: "Get data-driven recommendations for litigation strategy, risk assessment, and case outcome predictions based on your firm's historical data. Our Litigation Recommendations service leverages your firm's accumulated case experience to provide strategic insights that help you make better decisions about case strategy, settlement negotiations, and resource allocation. Learn from your past successes and challenges to improve future outcomes.",
        detailedDescription: "Litigation Recommendations uses machine learning to analyze your firm's historical case data, identifying patterns and correlations between case characteristics, strategies, and outcomes. The system can predict likely outcomes, recommend effective strategies, and assess risks based on similarities to past cases. This data-driven approach complements your legal expertise, providing evidence-based recommendations that help you make informed decisions about case strategy, settlement negotiations, and trial preparation. All analysis is based on your firm's own data, ensuring recommendations are relevant to your practice areas and client base.",
        useCases: [
          {
            title: "Case Strategy Development",
            description: "Analyze similar past cases to recommend effective legal strategies and approaches for new litigation matters. Input case characteristics, and the system identifies similar past cases, analyzes which strategies were most effective, and recommends approaches that have worked well in comparable situations. This helps you develop strategies based on proven approaches while adapting them to the specific circumstances of the current case.",
          },
          {
            title: "Risk Assessment",
            description: "Evaluate case strengths, weaknesses, and likely outcomes to inform settlement decisions and trial strategy. The system analyzes case characteristics, compares them to historical data, and provides risk-adjusted assessments of likely outcomes. Understand the probability of success, potential settlement ranges, and factors that influence case outcomes. This quantitative risk assessment complements your qualitative judgment, providing a more complete picture for strategic decision-making.",
          },
          {
            title: "Precedent Analysis",
            description: "Identify and analyze relevant case precedents from your firm's experience to strengthen legal arguments. The system searches through your case history to find relevant precedents, analyzes how similar arguments were used, and identifies which precedents were most persuasive. This helps you build stronger legal arguments by leveraging your firm's successful past cases and understanding what has worked in similar situations.",
          },
          {
            title: "Settlement Timing and Valuation",
            description: "Analyze historical settlement patterns to inform decisions about when to settle and what settlement values are reasonable. The system identifies patterns in settlement timing, analyzes factors that influence settlement amounts, and provides data-driven recommendations about optimal settlement timing and valuation. This helps you make more informed decisions about when to pursue settlement versus trial.",
          },
        ],
        benefits: [
          "Data-driven decision making based on your firm's historical experience",
          "Learn from past case outcomes to improve future strategies",
          "Improved settlement and trial strategies with evidence-based recommendations",
          "Risk-adjusted case evaluation with quantitative assessments",
          "Identifies successful strategies and patterns from your case history",
          "Supports strategic resource allocation and case prioritization",
          "Provides objective analysis to complement expert legal judgment",
        ],
        howItWorks: "Litigation Recommendations uses machine learning models trained on your firm's historical case data. Cases are analyzed to extract structured information including case type, facts, parties, strategies used, and outcomes. Machine learning algorithms identify patterns and correlations between these factors, enabling the system to make predictions and recommendations for new cases. When you input a new case, the system finds similar past cases, analyzes what strategies were successful, and provides recommendations based on historical patterns. All analysis uses only your firm's data, ensuring recommendations are relevant and private to your organization.",
      },
      proprietaryTools: {
        title: "Proprietary Tools",
        subtitle: "Custom-built legal productivity tools",
        overview: "Access a suite of specialized AI tools designed specifically for legal professionals, from document summarization to contract analysis. Our Proprietary Tools are purpose-built for legal work, understanding legal terminology, document structures, and professional requirements. These tools integrate seamlessly into your workflow, saving time and improving consistency while maintaining the high standards expected in legal practice.",
        detailedDescription: "Proprietary Tools is a comprehensive suite of AI-powered tools designed specifically for legal professionals. Unlike general-purpose AI tools, these tools understand legal document structures, terminology, and professional requirements. They're designed to integrate into existing workflows, working with your document management systems, email clients, and case management tools. Each tool is optimized for specific legal tasks, from drafting to analysis to communication, helping you work more efficiently while maintaining professional standards.",
        useCases: [
          {
            title: "Document Summarization",
            description: "Automatically generate concise summaries of lengthy legal documents, contracts, and case files to save review time. The summarization tool understands legal document structures and can extract key information, identify important clauses, and create executive summaries that highlight critical points. Summaries can be customized for different audiences - from brief client summaries to detailed attorney briefings. This dramatically reduces the time needed to review lengthy documents while ensuring nothing important is missed.",
          },
          {
            title: "Email Preparation",
            description: "Draft professional legal emails with AI assistance, ensuring proper tone and legal accuracy. The tool helps you compose clear, professional correspondence to clients, opposing counsel, and other parties. It can suggest appropriate language, ensure professional tone, check for completeness, and even identify potential issues before sending. Templates can be customized for different types of communications, and the tool learns from your firm's communication patterns to improve suggestions over time.",
          },
          {
            title: "Contract Analysis",
            description: "Analyze contracts for key terms, potential risks, and compliance issues with automated AI scanning. The contract analysis tool can quickly review contracts to identify important terms, flag unusual clauses, highlight potential risks, and check for compliance with standard requirements. It compares contracts against your firm's templates and standards, identifying deviations and potential issues. Analysis reports can be customized to focus on specific areas of concern, and the tool can learn from your review patterns to improve its ability to identify issues relevant to your practice.",
          },
          {
            title: "Legal Brief Drafting Assistance",
            description: "Get AI assistance in drafting legal briefs, memos, and other legal documents. The tool can help structure arguments, suggest relevant case citations, check for logical consistency, and ensure proper formatting and citation style. It understands legal argumentation structures and can help you build stronger, more persuasive briefs while maintaining your unique voice and style. The tool works as an assistant, suggesting improvements and identifying potential weaknesses in arguments.",
          },
        ],
        benefits: [
          "Saves hours of manual work by automating routine tasks",
          "Consistent, professional output that meets legal standards",
          "Reduces errors and oversights through automated checking",
          "Designed specifically for legal professionals and their workflows",
          "Integrates with existing tools and systems",
          "Customizable to match your firm's style and requirements",
          "Learns from usage to improve recommendations over time",
        ],
        howItWorks: "Proprietary Tools use specialized AI models trained on legal documents and understanding legal terminology and structures. Each tool is designed for specific tasks, using task-appropriate AI models and techniques. Tools integrate with your existing systems through APIs and interfaces, working within your secure environment. They can be customized to match your firm's style, templates, and requirements, and learn from usage patterns to improve suggestions. All tools maintain complete privacy, with processing happening within your controlled environment and no data shared with external services.",
      },
      localLaw: {
        title: "Local Law Integration",
        subtitle: "Israeli law and regulation integration",
        overview: "Access AI that understands Israeli legal context, regulations, and requirements, ensuring accurate advice for local matters. Our Local Law Integration ensures that all AI services understand Israeli law, regulations, and legal practice requirements. The system is continuously updated with the latest legal developments, regulatory changes, and Bar Association guidance, ensuring that AI recommendations are accurate and compliant with Israeli legal standards.",
        detailedDescription: "Local Law Integration provides AI systems with deep knowledge of Israeli legal frameworks, including statutes, regulations, case law, and regulatory guidance. The system understands Israeli legal terminology, procedural requirements, and professional standards. It's continuously updated with new legislation, regulatory changes, and Bar Association guidance, ensuring that AI recommendations and analysis are current and accurate. This localization is essential for Israeli law firms, as general-purpose AI systems often lack understanding of Israeli legal context and requirements.",
        useCases: [
          {
            title: "Regulatory Compliance",
            description: "Check compliance with Israeli regulations, from data protection laws to industry-specific requirements. The system understands Israeli regulatory frameworks including the Privacy Protection Law, consumer protection regulations, employment law requirements, and industry-specific regulations. It can analyze documents, contracts, and practices to identify compliance issues and recommend corrective actions. The system stays current with regulatory changes, helping you maintain compliance as regulations evolve.",
          },
          {
            title: "Legal Research",
            description: "Research Israeli case law, statutes, and regulatory guidance with AI that understands local legal context. Ask questions in Hebrew or English, and get accurate answers based on Israeli legal sources. The system understands Israeli legal terminology, case law structure, and how Israeli courts interpret and apply laws. Research results cite relevant Israeli cases, statutes, and regulatory guidance, with links to source materials when available.",
          },
          {
            title: "Bar Association Requirements",
            description: "Ensure all legal work meets Israeli Bar Association ethics standards and professional requirements. The system understands Bar Association rules of professional conduct, ethics requirements, and professional standards. It can check documents and practices for compliance with these requirements, flagging potential ethics issues and recommending best practices. This helps maintain high professional standards and avoid ethics violations.",
          },
          {
            title: "Contract Localization",
            description: "Ensure contracts and legal documents comply with Israeli law and use appropriate Israeli legal terminology. The system can review contracts to identify clauses that may need adjustment for Israeli law, suggest appropriate Israeli legal language, and check for compliance with Israeli contract law requirements. This is especially valuable for international contracts being adapted for Israeli use or contracts involving Israeli parties.",
          },
        ],
        benefits: [
          "Deep understanding of Israeli legal context, terminology, and frameworks",
          "Up-to-date regulatory information with continuous updates",
          "Bar Association compliance with understanding of ethics and professional standards",
          "Localized legal advice accuracy with Israeli law knowledge",
          "Support for Hebrew and English queries with accurate Israeli law responses",
          "Integration with Israeli legal databases and resources",
          "Understanding of Israeli legal practice and procedural requirements",
        ],
        howItWorks: "Local Law Integration maintains a comprehensive knowledge base of Israeli law, continuously updated with new legislation, regulations, case law, and Bar Association guidance. This knowledge base is integrated into all AI services, ensuring that recommendations, analysis, and answers are informed by Israeli legal context. The system understands Israeli legal terminology in both Hebrew and English, can interpret Israeli legal sources, and provides recommendations that comply with Israeli legal requirements. Updates are incorporated regularly, ensuring the system stays current with legal developments.",
      },
    },
    detailPage: {
      backToServices: "Back to Services",
      useCases: "Use Cases",
      keyBenefits: "Key Benefits",
      howItWorks: "How It Works",
      readyToStart: "Ready to Get Started?",
      contactDescription: "Contact us to learn more about how this service can benefit your law firm.",
    },
  },
  metrics: {
    title: "Trusted by Leading Law Firms",
    items: [
      {
        value: "50+",
        label: "Law Firms",
      },
      {
        value: "500+",
        label: "Legal Professionals",
      },
      {
        value: "99.9%",
        label: "Uptime SLA",
      },
      {
        value: "24/7",
        label: "Support",
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    items: [
      {
        quote: "This platform has transformed how we handle document analysis and research. The security features give us confidence that our clients' data is truly protected.",
        author: "David Cohen",
        role: "Managing Partner",
        firm: "Cohen & Partners Law Firm",
      },
      {
        quote: "Finally, an AI solution that understands the unique compliance requirements of Israeli law firms. It's not just secure—it's built for our specific needs.",
        author: "Sarah Levy",
        role: "General Counsel",
        firm: "TechLegal Israel",
      },
      {
        quote: "The observability features let us track exactly how our team uses AI, giving us the governance we need while enabling productivity gains we never thought possible.",
        author: "Michael Rosen",
        role: "IT Director",
        firm: "Rosen & Associates",
      },
    ],
  },
  features: {
    title: "Why Choose Our Platform",
    items: [
      {
        title: "Built for Law Firms",
        description: "Designed specifically for the unique needs and security requirements of legal practices",
      },
      {
        title: "Israeli Compliance",
        description: "Fully compliant with Israeli Privacy Protection Law and Bar Association ethics standards",
      },
      {
        title: "Enterprise Security",
        description: "Military-grade security measures to protect sensitive client information",
      },
      {
        title: "Scalable Infrastructure",
        description: "Grows with your firm - from solo practitioners to large legal organizations",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Ready to secure your firm's AI infrastructure?",
    description: "Contact us to learn more about our secure AI solutions for law firms",
    button: "Contact Us",
    email: "info@example.com",
    phone: "+972-XX-XXX-XXXX",
  },
  footer: {
    description: "Secure AI infrastructure designed specifically for law firms in Israel",
    links: {
      services: "Services",
      security: "Security",
      features: "Features",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    copyright: "© 2025. All rights reserved.",
  },
};

