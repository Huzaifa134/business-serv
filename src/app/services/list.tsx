import tax from "../../../public/tax.svg";
import account from "../../../public/account.svg";
import graph from "../../../public/graph.svg";
import manage from "../../../public/manage.svg"
import advice from "../../../public/advice.svg"
import finance from "../../../public/finance.svg"
import network from "../../../public/network.svg"
import tailored from "../../../public/tailored.svg"
export const posts = [
  {
    id: 1,
    title: "ACCOUNTING",
    href: "#",
    description:
      "Review accountant/s/bookeeper/s entries to ensure accuracy of the General Ledger Perform review of account on computer spreadsheets and/or database Manage accounting operations, reporting and reconciliations.",
    author: {
      imageUrl: account,
    },
  },
  {
    id: 2,
    title: "TAX AND AUDIT SERVICES",
    href: "#",
    description:
      "Complete/process monthly, quarterly and annual bank reconciliation and financial reports to verify practice of due diligence Perform field audit on wide variety of clientele Complete regulatory, pre-implementation and risk-based audits to achieve business objective.",
    author: {
      imageUrl: tax,
    },
  },
  {
    id: 3,
    title: "FINANCIAL ANALYSIS SERVICES",
    href: "#",
    description:
      "Thorough review of financial statements and tax audits Prepare monthly and annual expense forecasts, including any unecessary recommended action required to manage costs to achieve budget Reduce time and costs and increased efficiency by introducing new accounting procedures as required",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl: graph,
    },
  },
  {
    id: 4,
    title: "MANAGEMENT INFORMATION SYSTEM SERVICES",
    href: "#",
    description:
      "Develop organizational change management strategies Identify and implement processes and policies to eliminate bottlenecks Lead cross-functional teams to analyze operational impacts and opportunities Track, analyze, and interpret trends in dataDocument process flows and develop requirements for functional improvementsConduct activity-based analysis of business processesManage budget forecasting, goal setting, and performance reporting",
    author: {
      imageUrl: manage,
    },
  },
  {
    id: 5,
    title: "MANAGEMENT ADVISORY SERVICES",
    href: "#",
    description:
      "Streamline spending analysis through efficient and automated processes Identify and recommend improvements to operational process inefficiencies Analyze utilization and capacity against performance goals Create presentations illustrating business performance and goals Monitor Key Performance Indicators (KPI) and financial ratios  Conduct internal financial process audits   Handle cost and benefit analysis for marketing campaigns Develop financial analysis reports and presentations Implement efficient accounting, financial, and operational systems",
    author: {
      imageUrl: advice,
    },
  },
  {
    id: 6,
    title: "DEVELOPMENT AND IMPLEMENTATION OF EFFICIENT SYSTEMS",
    href: "#",
    description:
      "Create and implement efficient accounting, financial, and operational systems.Develop detailed financial models and analytical tools for variance analysis Analyze complex regulations and policy documents impacting budget and financial matters.",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl:finance ,
    },
  },
  {
    id: 7,
    title: "TAILORED PROGRAM FOR INDIVIDUALS AND BUSINESSES",
    href: "#",
    description:
      "Tailored programs for individuals, small, or medium-sized companies.Services include QuickBooks online accounting, audit, quality assurance, tax advisory, finance, accounting and business consulting, incorporation, and business registration.",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl: tailored,
    },
  },
  {
    id: 8,
    title: "PERFORMANCE OPTIMIZATION AND NETWORKING",
    href: "#",
    description:
      "Deliver performance updates, quarterly business reviews, and planning meetings.Optimize current revenue streams through networking for additional business prospects with established clients.",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl:network,
    },
  },
  {
    id: 9,
    title: "MANAGEMENT ADVISORY SERVICES",
    href: "#",
    description:
      "Streamline spending analysis to a more accurate, efficient, and automated process. Identify operational process inefficiencies and recommend necessary improvements.Analyze utilization and capacity against performance goals.Create monthly presentations illustrating business performance and goals.Monitor and analyze Key Performance Indicators (KPI) and financial ratios.Audit internal financial processes on a quarterly basis.Handle cost and benefit analysis for diverse marketing campaign projects.Develop financial analysis reports and presentations by applying acquired financial principles.Create executive analysis reports highlighting business issues, potential risks, and profit opportunities.",
    category: { title: "Marketing", href: "#" },
    author: {
      imageUrl:manage,
    },
  },
 
  // More posts...
];
