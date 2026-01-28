import { ProductItem } from "../dtos/remote/product";
import { RemoteHomeItemDTO } from "../dtos/remote/remoteHomeItemDTO";

export const HOME_ITEM: RemoteHomeItemDTO = {
  title: "Title Test!!!",
  headerItems: ["header", "h"],
  footerItems: ["footer", "f"],
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: "Ops Orchestrator",
    summary:
      "An end-to-end automation platform that connects scattered tooling into reliable operations workflows.",
    tag: [],
    description:
      "Ops Orchestrator gives operations teams a single cockpit to design, schedule, and monitor business-critical workflows. With real-time observability, smart retries, and audit-ready reporting, you can scale processes without adding headcount.",
    category: "Automation",
    imageUrl: "https://i.namu.wiki/i/DIWQPMFg_xE7JxIv0-4M5PbXco2d-BynsivSWqt6enqDgXOKw0nuZznBUGV-7FtJilQEY7zxodg1kZcYlQXDJw.webp",
    price: 1000,
    seoTitle: "Ops Orchestrator | ChanQ Digital",
    seoDescription:
      "Connect legacy systems and automate operations with Ops Orchestrator. Ship reliable workflows with audit-ready observability.",
  },
  {
    id: 0,
    name: "Insight Hub",
    summary:
      "A self-service analytics workspace that finally unites data, commentary, and decisions in one place.",
    tag: [],
    description:
      "Insight Hub gives business teams a collaborative, narrative-first analytics experience. Build live dashboards, annotate trends, and automate how insights flow to stakeholders.",
    category: "Analytics",
    imageUrl: "https://image.edaily.co.kr/images/Photo/files/NP/S/2024/11/PS24110300173.jpg",
    price: 899,
    seoTitle: "Insight Hub | ChanQ Digital",
    seoDescription:
      "Build collaborative analytics experiences with Insight Hub. Give your teams a storytelling-first way to make data-backed decisions.",
  },
  {
    id: 9,
    name: "Support Genius",
    summary:
      "AI-assisted customer support that learns from your best agents and delivers instant answers at scale.",
    tag: [],
    description:
      "Support Genius combines conversational AI with human-in-the-loop tooling so teams can handle surges without sacrificing quality. Train the assistant on your knowledge base, CRM history, and tone to deliver branded responses everywhere.",
    category: "Customer Experience",
    imageUrl: "https://img1.newsis.com/2019/04/25/NISI20190425_0000315819_web.jpg",
    price: 1499,
    seoTitle: "Support Genius | ChanQ Digital",
    seoDescription:
      "Deliver faster, smarter support with Support Genius. Blend AI automation and agent assistance for exceptional customer experiences.",
  },
  {
    id: 2,
    name: "Item No1.",
    summary: "My First Product Item",
    tag: [],
    description: "My First Product Item. and aqowinaskdmfakcmskdcas dfasdf",
    category: "",
    imageUrl: "https://i.pinimg.com/236x/76/a8/39/76a839c8f78ab9eda625157d6b7c566b.jpg",
    price: 0,
    seoTitle: "",
    seoDescription: ""
  },
];
