import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaDatabase,
  FaFlask,
  FaBug,
  FaCheckCircle,
  FaJava,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

import { 
  SiMongodb, 
  SiMysql, 
  SiDotnet, 
  SiOracle, 
  SiPostgresql,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiSqlalchemy,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiBlazor,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazons3,
  SiAwslambda,
  SiAmazonecs,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiPostman,
  SiTerraform,
  SiJest,
  SiVitest,
  SiPytest,
  SiPlaywright,
  SiSelenium,
  SiCypress,
  SiSpring,
  SiSpringboot,
  SiApache,
  SiGradle
} from 'react-icons/si';

// Mapeo de iconos para las tecnologías
export const getSkillIcon = (skillName) => {
  const iconMap = {
    // Python
    'Django': <SiDjango />,
    'FastAPI': <SiFastapi />,
    'Flask': <SiFlask />,
    'SQLAlchemy': <SiSqlalchemy />,
    
    // JavaScript/Node.js
    'React': <FaReact />,
    'Express.js': <SiExpress />,
    'Next.js': <SiNextdotjs />,
    'Redux': <SiRedux />,
    
    // .NET/C#
    'ASP.NET Core': <SiDotnet />,
    'Entity Framework': <SiDotnet />,
    'Blazor': <SiBlazor />,
    'Web API': <SiDotnet />,
    
    // Java/Spring
    'Spring Boot': <SiSpringboot />,
    'Spring MVC': <SiSpring />,
    'Spring Data JPA': <SiSpring />,
    'Spring Security': <SiSpring />,
    'Maven': <SiApache />,
    'Gradle': <SiGradle />,
    
    // Bases de Datos
    'MySQL': <SiMysql />,
    'MongoDB': <SiMongodb />,
    'Oracle': <SiOracle />,
    'Postgres': <SiPostgresql />,
    
    // AWS Cloud
    'EC2': <SiAmazonec2 />,
    'RDS': <SiAmazonrds />,
    'S3': <SiAmazons3 />,
    'Lambda': <SiAwslambda />,
    'ECS/Fargate': <SiAmazonecs />,
    'VPC': <FaAws />,
    'IAM': <FaAws />,
    'Athena': <FaAws />,
    'CloudWatch': <FaAws />,
    'API Gateway': <FaAws />,
    'CloudFormation': <FaAws />,
    
    // DevOps & Tools
    'Docker': <FaDocker />,
    'Kubernetes': <SiKubernetes />,
    'Terraform': <SiTerraform />,
    'Jenkins': <SiJenkins />,
    'GitHub Actions': <SiGithubactions />,
    'Git': <FaGitAlt />,
    'Postman': <SiPostman />,
    
    // Testing & QA
    'Jest': <SiJest />,
    'Vitest': <SiVitest />,
    'PyTest': <SiPytest />,
    'NUnit': <SiDotnet />,
    'Playwright': <SiPlaywright />,
    'Selenium': <SiSelenium />,
    'Cypress': <SiCypress />,
    'Postman Testing': <SiPostman />,
    'Unit Testing': <FaCheckCircle />,
    'Integration Testing': <FaBug />,
    'Tox': <FaPython />,
    'Flake8': <FaFlask />
  };
  return iconMap[skillName] || <FaDatabase />;
};

// Mapeo de colores para las tecnologías
export const getSkillColor = (skillName) => {
  const colorMap = {
    // Python
    'Django': '#092e20',
    'FastAPI': '#009688',
    'Flask': '#000000',
    'SQLAlchemy': '#d71f00',
    
    // JavaScript/Node.js
    'React': '#61dafb',
    'Express.js': '#000000',
    'Next.js': '#000000',
    'Redux': '#764abc',
    
    // .NET/C#
    'ASP.NET Core': '#512bd4',
    'Entity Framework': '#512bd4',
    'Blazor': '#512bd4',
    'Web API': '#512bd4',
    
    // Java/Spring
    'Spring Boot': '#6db33f',
    'Spring MVC': '#6db33f',
    'Spring Data JPA': '#6db33f',
    'Spring Security': '#6db33f',
    'Maven': '#c71a36',
    'Gradle': '#02303a',
    
    // Bases de Datos
    'MySQL': '#4479a1',
    'MongoDB': '#47a248',
    'Oracle': '#f80000',
    'Postgres': '#336791',
    
    // AWS Cloud
    'EC2': '#ff9900',
    'RDS': '#ff9900',
    'S3': '#ff9900',
    'Lambda': '#ff9900',
    'ECS/Fargate': '#ff9900',
    'VPC': '#ff9900',
    'IAM': '#ff9900',
    'Athena': '#ff9900',
    'CloudWatch': '#ff9900',
    'API Gateway': '#ff9900',
    'CloudFormation': '#ff9900',
    
    // DevOps & Tools
    'Docker': '#2496ed',
    'Kubernetes': '#326ce5',
    'Terraform': '#7b42bc',
    'Jenkins': '#d33833',
    'GitHub Actions': '#2088ff',
    'Git': '#f05032',
    'Postman': '#ff6c37',
    'CI/CD': '#336791',
    
    // Testing & QA
    'Jest': '#c21325',
    'Vitest': '#729b1b',
    'PyTest': '#0a9edc',
    'NUnit': '#512bd4',
    'Playwright': '#2eadff',
    'Selenium': '#43b02a',
    'Cypress': '#17202c',
    'Postman Testing': '#ff6c37',
    'Unit Testing': '#28a745',
    'Integration Testing': '#fd7e14',
    'Tox': '#3776ab',
    'Flake8': '#000000'
  };
  return colorMap[skillName] || '#667eea';
};

// Exportar iconos para los controles del carrusel
export const CarouselIcons = {
  ChevronLeft: FaChevronLeft,
  ChevronRight: FaChevronRight
};