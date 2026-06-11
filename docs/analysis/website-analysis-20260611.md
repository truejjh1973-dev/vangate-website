# VanGATE 网站重建 - 需求补充分析

## 网站分析日期
2026年6月11日

---

## 一、现有网站完整结构

### 1.1 导航结构（6大产品分类）

```
├── Residential（住宅）
│   ├── Overhead Garage Doors（平开式车库门）
│   ├── Door-In-Door Garage Doors（门中门车库门）
│   ├── Residential Gates（住宅门）
│   ├── Spiral Roll-Up Doors（螺旋卷门）
│   ├── Garage Door Hardware（车库门五金）
│   ├── Gate Hardware（门用五金）
│   └── Garage Door Springs（车库门弹簧）
│
├── Commercial（商业）
│   ├── Sectional Doors（分节提升门）
│   ├── High-Speed Doors（高速门）
│   ├── Rolling Steel Doors（钢制卷门）
│   ├── Parking Gates（停车场道闸）
│   ├── Barrier Systems（栏杆系统）
│   └── Dock Equipment（码头设备）
│
├── Lift & Rotate（升降与旋转）
│   ├── Home Elevator（家用电梯）
│   ├── Compact Lifts（紧凑型升降平台）
│   ├── Hydraulic Lift Platforms（液压升降平台）
│   ├── Vehicle Lift Platforms（车辆升降平台）
│   └── Turntables（转台）
│
├── Advanced CNC（高级数控加工）
│   ├── Laser Cutting（激光切割）
│   ├── Waterjet Cutting（水刀切割）
│   ├── CNC Press Brake（数控折弯机）
│   ├── CNC Bending（数控弯曲）
│   ├── CNC Routing（数控铣削）
│   ├── CNC Aluminum Profile Cutting（铝型材切割）
│   ├── Laser Welding（激光焊接）
│   └── Custom Fabrication（定制加工）
│
├── Operators & Controls（操作器与控制）
│   ├── Gate Operators（门操作器）
│   ├── Garage Door Operators（车库门操作器）
│   ├── Entrance Access Control（入口门禁系统）
│   ├── Lift Control Systems（升降控制系统）
│   ├── Elevator Panels & Interfaces（电梯面板与接口）
│   └── Safety & Accessories（安全配件）
│
└── Services（服务）
    ├── Installation（安装）
    ├── Maintenance（维护）
    ├── Repairs（维修）
    └── Emergency Repairs（紧急维修 24/7）
```

### 1.2 代理品牌

| 品牌 | 国家 | 主要产品 |
|------|------|---------|
| CAME | 意大利 | 道闸、门禁、控制器 |
| TAU | 意大利 | 道闸、遥控器 |
| KingGates | 意大利 | 门操作器 |
| LiftMaster | 美国 | 车库门操作器、门禁 |
| BAME | - | 门操作器 |
| Comunello | 意大利 | 五金配件 |

---

## 二、首页模块详解

### 2.1 品牌标语
> "ENGINEERED DOOR & GATE SYSTEMS • Designed. Fabricated. Installed. Supported."

### 2.2 企业数据展示
| 指标 | 数值 |
|------|------|
| 工厂面积 | 13,000平方英尺 |
| 装配设施 | 60,000平方英尺 |
| 行业经验 | 20年以上 |
| 客户数量 | 3,000+ |
| 服务范围 | 可承接最大型项目 |

### 2.3 产品分类入口（6个卡片）
1. Residential - 住宅解决方案
2. Commercial - 商业解决方案
3. Lift & Rotate - 升降旋转设备
4. Advanced CNC - 数控加工服务
5. Operators & Controls - 操作控制系统
6. Services - 安装与维护服务

### 2.4 客户评价（真实案例）
- 客户名称：Ken Xie
- 评价内容：关于产品质量和服务的详细好评

### 2.5 项目案例画廊
- 大量实际安装案例图片
- 展示各类型门的实际应用

---

## 三、联系页面详情

### 3.1 联系表单
| 字段 | 类型 | 必填 |
|------|------|------|
| Name | 文本 | 是 |
| Email | 邮件 | 是 |
| Phone | 电话 | 是 |

### 3.2 分部门联系方式

| 部门 | 电话 | 邮箱 |
|------|------|------|
| General Inquiries（一般咨询） | 604.938.3588 / 604.370.0988 | info@vangate.ca |
| After-Sale and Service（售后） | 604.719.8956 | amandaliu@vangate.ca |
| Technical Support（技术支持） | 778.859.6910 / 604.358.8696 | davidzheng@vangate.ca |
| Finance and Supply Chain（财务） | 604.358.6386 | jennyhao@vangate.ca |

### 3.3 办公地点
| 地点 | 地址 |
|------|------|
| Richmond Office | 130/160 12820 Clarke Pl, Richmond, BC V6V 2H1 |
| Surrey Branch | 14613 64 AVE, Surrey, BC V3S 1X6 |

### 3.4 营业时间
- Monday to Friday: 8:00am - 4:30pm

### 3.5 紧急维修服务
- 24/7 紧急维修服务（24小时覆盖）

---

## 四、公司简介

> "Focused on creating commercial and residential automatic entrance solutions, VanGATE Manufacturing and Automation provides comprehensive design, manufacturing, and installation services that are tailored to suit the needs of each individual customer."

**核心定位**：
- 本地制造（温哥华列治文）
- 全方位服务（设计+制造+安装+维护）
- 品质保证

---

## 五、技术现状与迁移建议

### 5.1 当前技术栈
- WordPress 6.9.4
- Elementor 页面编辑器
- Bootstrap 4.5.3 + jQuery
- LiteSpeed 服务器
- Contact Form 7
- Yoast SEO
- Wordfence 安全插件

### 5.2 数据迁移清单
| 数据类型 | 迁移方式 | 复杂度 |
|---------|---------|--------|
| 产品数据 | CSV导入 / API | 中 |
| 产品图片 | 文件迁移 | 高 |
| 文章/新闻 | 导出导入 | 低 |
| 客户评价 | 手动录入 | 低 |
| 联系表单数据 | 历史存档 | 低 |

### 5.3 推荐技术栈

| 层级 | 推荐方案 | 理由 |
|------|---------|------|
| 前端框架 | Next.js 14 + TypeScript | SSR/SEO友好，开发效率高 |
| 样式系统 | Tailwind CSS + shadcn/ui | 现代化，响应式支持好 |
| 内容管理 | Sanity CMS | 非技术用户友好，API优先 |
| 表单处理 | Resend + 数据库 | 现代化邮件处理 |
| 部署平台 | Vercel | Next.js官方支持 |
| 图片CDN | Cloudinary / Vercel Blob | 优化加载速度 |
| 分析统计 | Google Analytics 4 + GTM | 保持现有统计能力 |

---

## 六、SEO现状

### 6.1 已确认功能
- 独立页面SEO标题和描述
- Canonical URL
- Open Graph / Twitter Card
- 结构化数据 (JSON-LD)
- XML Sitemap
- Google Analytics 4
- Google Tag Manager

### 6.2 迁移注意事项
- 保持现有URL结构或设置301重定向
- 保留现有SEO排名
- 迁移后验证索引状态

---

## 七、设计参考

### 7.1 品牌色彩（从网站提取）
- 主色：深蓝色（工业/专业感）
- 辅色：白色（简洁/干净）
- 强调色：可根据产品图片调整

### 7.2 设计关键词
- Precision（精密）
- Quality（品质）
- Reliability（可靠）
- Professional（专业）
- Local Manufacturing（本地制造）

### 7.3 图片风格
- 大量使用实际安装案例
- 工业产品特写
- 项目前后对比（如有）
