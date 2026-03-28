export const STATS_DATA = [
  { 
    id: "gender", 
    title: "男女比率", 
    type: "donut", 
    data: [
      { name: "男性", value: 75, color: "var(--color-primary)" }, 
      { name: "女性", value: 25, color: "#93c5fd" }
    ] 
  },
  { 
    id: "age", 
    title: "年代別比率", 
    type: "donut", 
    data: [
      { name: "20代", value: 30, color: "#60a5fa" }, 
      { name: "30代", value: 45, color: "var(--color-primary)" }, 
      { name: "40代以上", value: 25, color: "#3b82f6" }
    ] 
  },
  { 
    id: "experience", 
    title: "経験年数", 
    type: "donut", 
    data: [
      { name: "1-3年", value: 40, color: "#93c5fd" }, 
      { name: "4-7年", value: 35, color: "#3b82f6" }, 
      { name: "8年以上", value: 25, color: "var(--color-primary-hover)" }
    ] 
  }
];
