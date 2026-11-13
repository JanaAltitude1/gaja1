export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Technology', href: '#technology' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
];

export interface FeatureItem {
  id: string;
  title: string;
  lineOne: string;
  lineTwo: string;
  iconName:
    | 'FolderKanban'
    | 'ClipboardList'
    | 'Layers'
    | 'PlayCircle'
    | 'Bug'
    | 'ChartNoAxesCombined';
  accent: 'blue' | 'orange';
  spanClass: string;
  tiltAngle: string;
}

export const PLATFORM_FEATURES: FeatureItem[] = [
  {
    id: 'project-management',
    title: 'Testing Project Management',
    lineOne: 'Create and organize testing projects while assigning QA team members across releases.',
    lineTwo: 'Monitor project progress from initial scoping through final sign-off.',
    iconName: 'FolderKanban',
    accent: 'blue',
    spanClass: 'lg:col-span-7',
    tiltAngle: '-rotate-6',
  },
  {
    id: 'test-case-management',
    title: 'Test Case Management',
    lineOne: 'Create structured test cases with clear objectives and expected results.',
    lineTwo: 'Categorize testing scenarios so teams locate coverage gaps faster.',
    iconName: 'ClipboardList',
    accent: 'orange',
    spanClass: 'lg:col-span-5',
    tiltAngle: 'rotate-6',
  },
  {
    id: 'test-suite-management',
    title: 'Test Suite Management',
    lineOne: 'Group related test cases into organized testing suites for every release cycle.',
    lineTwo: 'Monitor suite status at a glance before code reaches production.',
    iconName: 'Layers',
    accent: 'blue',
    spanClass: 'lg:col-span-4',
    tiltAngle: '-rotate-3',
  },
  {
    id: 'test-execution-tracking',
    title: 'Test Execution Tracking',
    lineOne: 'Record test execution sessions and track passed, failed, and blocked runs.',
    lineTwo: 'Maintain a reliable execution history across every build.',
    iconName: 'PlayCircle',
    accent: 'blue',
    spanClass: 'lg:col-span-4',
    tiltAngle: 'rotate-5',
  },
  {
    id: 'defect-bug-management',
    title: 'Defect & Bug Management',
    lineOne: 'Record software defects directly from testing runs with severity and priority.',
    lineTwo: 'Track bug resolution status from discovery to verified closure.',
    iconName: 'Bug',
    accent: 'orange',
    spanClass: 'lg:col-span-4',
    tiltAngle: '-rotate-6',
  },
  {
    id: 'qa-reporting-analytics',
    title: 'QA Reporting & Analytics',
    lineOne: 'Monitor testing progress and review test completion statistics in one place.',
    lineTwo: 'Understand defect distribution across projects to ship with greater confidence.',
    iconName: 'ChartNoAxesCombined',
    accent: 'blue',
    spanClass: 'lg:col-span-12',
    tiltAngle: 'rotate-3',
  },
];

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName:
    | 'FolderKanban'
    | 'ClipboardList'
    | 'Layers'
    | 'PlayCircle'
    | 'ChartNoAxesCombined';
  highlightOrange?: boolean;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Create Your Project',
    description: 'Set up testing workspaces and assign team responsibilities.',
    iconName: 'FolderKanban',
  },
  {
    stepNumber: '02',
    title: 'Organize Test Cases',
    description: 'Author structured scenarios with expected outcomes.',
    iconName: 'ClipboardList',
    highlightOrange: true,
  },
  {
    stepNumber: '03',
    title: 'Manage Test Suites',
    description: 'Group related test cases for targeted release cycles.',
    iconName: 'Layers',
  },
  {
    stepNumber: '04',
    title: 'Record Test Executions',
    description: 'Log passed, failed, and blocked runs with full history.',
    iconName: 'PlayCircle',
    highlightOrange: true,
  },
  {
    stepNumber: '05',
    title: 'Monitor Defects & Reports',
    description: 'Track defect resolution and review completion insights.',
    iconName: 'ChartNoAxesCombined',
  },
];

export interface TechnologyItem {
  name: string;
  role: string;
  description: string;
  accent: 'blue' | 'orange';
}

export const PROPOSED_TECHNOLOGIES: TechnologyItem[] = [
  {
    name: 'NVIDIA NeMo',
    role: 'Proposed Model Adaptation Layer',
    description:
      'Evaluated as a candidate framework for customizing domain-specific language models around structured QA documentation and test taxonomy.',
    accent: 'blue',
  },
  {
    name: 'NVIDIA NIM',
    role: 'Proposed Inference Microservices',
    description:
      'Considered for standardized, containerized model serving to support future intelligent test organization and triage workflows.',
    accent: 'orange',
  },
  {
    name: 'NVIDIA TensorRT-LLM',
    role: 'Proposed Inference Acceleration',
    description:
      'Explored for low-latency text processing when assisting teams with large volumes of test specifications and defect summaries.',
    accent: 'blue',
  },
  {
    name: 'NVIDIA Triton',
    role: 'Proposed Multi-Model Serving',
    description:
      'Investigated for orchestrating future analytical workloads reliably across cloud and enterprise deployment topologies.',
    accent: 'orange',
  },
];

export interface AudienceItem {
  title: string;
  description: string;
  iconName: 'Code2' | 'Users' | 'Cloud' | 'Building2' | 'Workflow';
  spanClass: string;
  accent: 'blue' | 'orange';
}

export const TARGET_AUDIENCES: AudienceItem[] = [
  {
    title: 'Software Development Companies',
    description:
      'Standardize testing practices across multiple client engagements, products, and parallel delivery timelines.',
    iconName: 'Code2',
    spanClass: 'lg:col-span-7',
    accent: 'blue',
  },
  {
    title: 'QA & Testing Teams',
    description:
      'Replace scattered spreadsheets with structured test cases, organized suites, and clear execution records.',
    iconName: 'Users',
    spanClass: 'lg:col-span-5',
    accent: 'orange',
  },
  {
    title: 'SaaS Businesses',
    description:
      'Keep rapid release cycles dependable with traceable verification and immediate defect visibility.',
    iconName: 'Cloud',
    spanClass: 'lg:col-span-4',
    accent: 'blue',
  },
  {
    title: 'Enterprise IT Departments',
    description:
      'Establish consistent quality governance and audit-ready testing records across internal software initiatives.',
    iconName: 'Building2',
    spanClass: 'lg:col-span-4',
    accent: 'orange',
  },
  {
    title: 'QA Managers & Automation Engineers',
    description:
      'Coordinate manual and structured testing coverage while reviewing completion metrics from one central hub.',
    iconName: 'Workflow',
    spanClass: 'lg:col-span-4',
    accent: 'blue',
  },
];

export interface BenefitItem {
  title: string;
  description: string;
  iconName: 'FolderKanban' | 'ClipboardList' | 'Bug' | 'Workflow' | 'ChartNoAxesCombined';
  accent: 'blue' | 'orange';
  spanClass: string;
}

export const KEY_BENEFITS: BenefitItem[] = [
  {
    title: 'Centralized Testing Management',
    description: 'Bring projects, teams, and test documentation out of siloed documents into one unified system.',
    iconName: 'FolderKanban',
    accent: 'blue',
    spanClass: 'sm:col-span-2',
  },
  {
    title: 'Organized Test Case Records',
    description: 'Maintain clear objectives, expected outcomes, and categorized scenarios for every release.',
    iconName: 'ClipboardList',
    accent: 'orange',
    spanClass: 'sm:col-span-1',
  },
  {
    title: 'Improved Defect Visibility',
    description: 'Spot severity, priority, and resolution bottlenecks early before they delay shipments.',
    iconName: 'Bug',
    accent: 'blue',
    spanClass: 'sm:col-span-1',
  },
  {
    title: 'Structured QA Workflows',
    description: 'Move seamlessly from project planning through suite execution and defect verification.',
    iconName: 'Workflow',
    accent: 'orange',
    spanClass: 'sm:col-span-1',
  },
  {
    title: 'Simplified Quality Reporting',
    description: 'Give engineering and product stakeholders an accurate view of release readiness.',
    iconName: 'ChartNoAxesCombined',
    accent: 'blue',
    spanClass: 'sm:col-span-1',
  },
];

export interface ExpectationCard {
  perspective: string;
  context: string;
  statement: string;
  focusLabel: string;
}

export const TEAM_EXPECTATIONS: ExpectationCard[] = [
  {
    perspective: 'QA Team Leads',
    context: 'Structured Coverage Planning',
    statement:
      'Teams need a single workspace where test cases, suite readiness, and assigned responsibilities stay aligned throughout every sprint.',
    focusLabel: 'Clarity over scattered spreadsheets',
  },
  {
    perspective: 'Engineering Managers',
    context: 'Release Readiness & Triage',
    statement:
      'Product leaders rely on transparent execution histories and prioritized defect logs to make confident go or no-go release decisions.',
    focusLabel: 'Traceable defect accountability',
  },
  {
    perspective: 'Product & Delivery Teams',
    context: 'Consistent Quality Visibility',
    statement:
      'Cross-functional teams benefit from clear completion statistics and defect distribution summaries without wading through raw status logs.',
    focusLabel: 'Actionable QA reporting',
  },
];

export interface PricingTier {
  id: string;
  name: string;
  statusLabel: string;
  summary: string;
  kicker?: string;
  highlighted?: boolean;
  ctaLabel: string;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    statusLabel: 'Coming Soon',
    summary: 'Monthly subscription designed for small software teams establishing structured QA.',
    ctaLabel: 'Join Waitlist',
    features: [
      'Per-user monthly subscription',
      'Testing project & test case management',
      'Organized test suites & execution logs',
      'Core defect tracking workflow',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    statusLabel: 'Coming Soon',
    kicker: 'Recommended for Growing Teams',
    highlighted: true,
    summary: 'Built for scaling SaaS and QA teams requiring deeper reporting and cross-project visibility.',
    ctaLabel: 'Get Started',
    features: [
      'Flexible per-user plans',
      'Unlimited testing projects & suites',
      'Full execution history & defect triage',
      'Advanced QA reporting & analytics',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    statusLabel: 'Contact Sales',
    summary: 'Tailored QA governance and dedicated onboarding for larger IT and software organizations.',
    ctaLabel: 'Contact Sales',
    features: [
      'Enterprise-level solutions & rollout',
      'Multi-team workspace organization',
      'Custom onboarding & priority support',
      'Structured governance & reporting alignment',
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is Istrava?',
    answer:
      'Istrava is a centralized Software Testing and Quality Assurance Management Platform that brings testing projects, test cases, test suites, execution records, defect tracking, and QA reporting together in one organized workspace.',
  },
  {
    question: 'Who can use Istrava?',
    answer:
      'Istrava is built for software development companies, dedicated QA and testing teams, SaaS businesses, enterprise IT departments, and QA managers or automation engineers looking for structured quality visibility.',
  },
  {
    question: 'What testing management features are included?',
    answer:
      'The platform covers six core capabilities: testing project management, structured test case management, test suite organization, test execution tracking (passed, failed, and blocked runs), defect management, and QA reporting.',
  },
  {
    question: 'Can Istrava manage software defects?',
    answer:
      'Yes. Teams can record software defects directly alongside test executions, assign severity and priority levels, and track bug resolution status through verification.',
  },
  {
    question: 'Does Istrava support AI-powered testing?',
    answer:
      'Istrava is evaluating modern AI infrastructure options—including NVIDIA NeMo, NVIDIA NIM, NVIDIA TensorRT-LLM, and NVIDIA Triton—as proposed foundations for future AI-assisted QA capabilities. Today, Istrava focuses on delivering reliable, structured test management and reporting.',
  },
  {
    question: 'Does Istrava offer enterprise solutions?',
    answer:
      'Yes. Our Enterprise tier is designed for organizations needing tailored rollout support, multi-team organization, and structured QA governance. Reach out via Contact Sales to discuss your organization’s requirements.',
  },
];
