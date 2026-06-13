# VanGATE 网站重建 - 功能与设计概要

**文档版本**：v1.0
**创建日期**：2026-06-12
**基于**：BDC Report + Digital Assessment + 网站分析

---

## 一、BDC 评估现状总结

### 1.1 数字营销评分：64/100

| 评估维度 | 评分 | 状态 |
|---------|------|------|
| 本地商家信息 | 0/100 | ⚠️ 严重不足 |
| 社交媒体 | 0/100 | ⚠️ 未设置 |
| 无障碍访问 | 55/100 | ⚠️ 需改进 |
| 付费搜索 | 100/100 | ✅ 已使用Google Ads |
| 自然搜索 | 62/100 | ⚠️ SEO待提升 |
| 移动端适配 | 100/100 | ✅ 优秀 |
| 网站构建 | 96/100 | ✅ 技术良好 |
| 其他项 | 59/100 | ⚠️ 有待完善 |

### 1.2 关键发现

**优势：**
- 移动端适配优秀（满分）
- Google Analytics 已安装
- 付费搜索已启用
- SSL 证书已配置
- 现有网站技术架构健康（无死链）

**待改进：**
- 无在线商家目录收录
- 无社交媒体链接
- 无障碍访问性欠佳（WCAG A级错误）
- SEO 内容不足（仅1644词/5页）
- 反向链接薄弱（仅31个来源域名）
- 标题和描述不规范

---

## 二、页面结构设计

### 2.1 推荐导航架构（基于BDC建议）

```
VanGATE
├── Solutions（解决方案）
│   ├── Residential（住宅）
│   │   ├── Driveway Gates（车道门）
│   │   ├── Garage Doors（车库门）
│   │   ├── Home Elevators（家用电梯）
│   │   ├── Gate Automation（门禁自动化）
│   │   └── Service & Repair（维修服务）
│   │
│   └── Commercial & Industrial（商业/工业）
│       ├── Security Gates（安全门）
│       ├── Industrial Doors（工业门）
│       ├── Barrier Systems（道闸系统）
│       ├── Access Control（门禁系统）
│       ├── Lift & Rotate（升降旋转系统）
│       └── Service & Maintenance（维保服务）
│
├── Custom Manufacturing（定制加工）
│   ├── CNC Machining（数控加工）
│   ├── Laser Cutting（激光切割）
│   ├── Waterjet Cutting（水刀切割）
│   ├── Fabrication Services（焊接钣金）
│   ├── Engineering & Design（工程设计）
│   └── Custom Projects（定制项目）
│
├── Projects（项目案例）
│   ├── Residential Projects（住宅项目）
│   ├── Commercial Projects（商业项目）
│   └── Industrial Projects（工业项目）
│
├── About（关于我们）
│   ├── Company Overview（公司概况）
│   ├── Why Us（为什么选择我们）
│   ├── Our Facility（生产基地）
│   ├── Certifications（资质认证）
│   └── Careers（招聘信息）
│
└── Resources（资源中心）
    ├── Blog（博客/文章）
    ├── FAQs（常见问题）
    ├── Downloads（资料下载）
    └── Warranty（保修信息）
```

### 2.2 页面功能清单

| 页面 | 类型 | 核心功能 | 优先级 |
|------|------|---------|--------|
| 首页 | Landing | 价值主张、入口卡片、轮播、项目展示 | P0 |
| Solutions | Catalog | 分类导航、产品预览、筛选 | P0 |
| Products | Catalog | 产品列表、筛选、对比 | P1 |
| Custom Manufacturing | Service | 能力展示、加工类型、询价 | P0 |
| Projects | Portfolio | 案例画廊、筛选、详情页 | P0 |
| About | Corporate | 公司介绍、团队、资质 | P1 |
| Contact | Conversion | 联系表单、部门电话、地图 | P0 |
| Resources | Content | 博客、下载、FAQ | P1 |

---

## 三、首页设计规范

### 3.1 核心价值主张（BDC建议）

**当前版本：**
> "Engineered Door and Window Gate Systems. Designed. Fabricated. Installed. Supported."

**建议更新为：**
> "Western Canada's Fully Integrated Gate & Door Manufacturer"
> "From Engineering to Installation – Everything Built In-House"

### 3.2 首页模块结构

```
┌─────────────────────────────────────────────────────┐
│  [导航栏] Logo | Solutions | Custom | Projects |    │
│           About | Resources        [Phone] [Quote]  │
├─────────────────────────────────────────────────────┤
│  [Hero区域]                                          │
│  ┌──────────────────────┬──────────────────────────┐ │
│  │ 价值主张标题          │ 轮播图片（项目案例）      │ │
│  │ 副标题说明            │                          │ │
│  │ [CTA按钮组]          │                          │ │
│  │                      │                          │ │
│  │ [统计数据]           │                          │ │
│  │ 13K工厂 | 60K装配    │                          │ │
│  │ 20+年 | 3K+客户      │                          │ │
│  └──────────────────────┴──────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│  [解决方案入口 - 6大分类卡片]                          │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐       │
│  │住宅 │ │商业 │ │升降 │ │数控 │ │操作 │ │服务 │       │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘       │
├─────────────────────────────────────────────────────┤
│  [为什么选择我们 - 差异化展示]                         │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│  │本地制造│ │垂直整合│ │20年经验│ │专业团队│        │
│  └────────┘ └────────┘ └────────┘ └────────┘      │
├─────────────────────────────────────────────────────┤
│  [精选项目案例]                                       │
│  [项目1] [项目2] [项目3] [查看更多]                  │
├─────────────────────────────────────────────────────┤
│  [客户信任区]                                         │
│  Google评价 ★★★★★ 4.9/5 | 客户Logo墙                │
├─────────────────────────────────────────────────────┤
│  [CTA区块] "准备好开始您的项目了吗？"                  │
│  [获取报价] [联系专家]                               │
├─────────────────────────────────────────────────────┤
│  [页脚]                                              │
│  产品 | 定制加工 | 服务 | 公司 | 联系方式 | 社交媒体   │
└─────────────────────────────────────────────────────┘
```

---

## 四、二级功能菜单设计

### 4.1 Solutions 菜单（解决方案）

**设计目标：** 按客户类型分组，而非按产品类型

| 客户群体 | 入口描述 | CTA按钮 | 二级内容 |
|---------|---------|---------|---------|
| Residential | 住宅解决方案 | Request a Quote | 产品列表、案例、价格区间 |
| Commercial & Industrial | 商业/工业方案 | Speak with Specialist | 产品列表、项目咨询 |

### 4.2 Custom Manufacturing 菜单（定制加工）

**设计目标：** 展示制造能力，获取询价

| 子菜单 | 内容 | 特殊功能 |
|-------|------|---------|
| CNC Machining | 加工能力、设备介绍 | 询价表单 |
| Laser Cutting | 切割类型、材料范围 | 在线报价 |
| Waterjet Cutting | 水刀优势、精度 | 技术参数 |
| Fabrication | 焊接、折弯、组装 | 项目咨询 |
| Engineering & Design | 设计能力、流程 | 提交图纸 |
| Custom Projects | 案例展示 | 项目详情 |

### 4.3 Projects 菜单（项目案例）

**设计目标：** 商业客户需要案例展示建立信任

| 类型 | 内容要求 | 展示格式 |
|------|---------|---------|
| Residential | 3-5个精选案例 | 图片画廊 |
| Commercial | 5-10个详细案例 | 案例研究格式 |
| Industrial | 大型项目 | 技术规格+照片 |

**案例研究模板：**
```
项目名称：[Name]
行业：[Industry]
规模：[Scope]
挑战：[Challenge]
解决方案：[Solution]
成果：[Results]
照片：[Gallery]
```

### 4.4 Resources 菜单（资源中心）

| 子菜单 | 目的 | 内容类型 |
|-------|------|---------|
| Blog | SEO + 教育客户 | 产品对比、行业知识、维护指南 |
| FAQs | 减少重复咨询 | 按产品分类的问题解答 |
| Downloads | 潜在客户转化 | 产品手册、技术文档 |
| Warranty | 建立信任 | 保修政策、注册 |

---

## 五、移动端设计规范

### 5.1 响应式断点

| 断点 | 设备 | 布局策略 |
|------|------|---------|
| < 640px | 手机竖屏 | 单列，汉堡菜单 |
| 640-768px | 手机横屏/小平板 | 单列，调整间距 |
| 768-1024px | 平板 | 双列网格 |
| 1024-1280px | 小桌面 | 多列网格 |
| > 1280px | 桌面 | 完整布局 |

### 5.2 移动端关键要求

**基于BDC评估（移动端100分）：**
- 保持现有优秀的移动端适配
- 确保触摸目标 ≥ 44x44px
- 避免水平滚动
- 文字可读（≥16px防止iOS缩放）
- 图片自适应

**微信/QQ浏览器兼容性：**
- viewport-fit=cover（刘海屏）
- -webkit-overflow-scrolling: touch
- backdrop-filter 降级处理
- transform3d 硬件加速

---

## 六、转化优化（CTA策略）

### 6.1 按客户类型差异化CTA

**住宅客户：**
| 场景 | CTA文案 |
|------|---------|
| 首页 | Request a Quote |
| 产品页 | Book a Site Visit |
| 案例页 | View Our Portfolio |
| 底部 | Download Free Brochure |

**商业/工业客户：**
| 场景 | CTA文案 |
|------|---------|
| 首页 | Speak with a Technical Specialist |
| 产品页 | Request Project Consultation |
| 定制加工 | Submit Drawings for Review |
| 底部 | Get a Custom Quote |

### 6.2 表单设计

**联系表单字段：**
- Name（必填）
- Email（必填）
- Phone（必填）
- Customer Type（住宅/商业/工业）
- Project Type（下拉选择）
- Message（可选）

---

## 七、技术SEO清单

### 7.1 现有状态（基于BDC报告）

| 检查项 | 状态 | 行动 |
|-------|------|------|
| 页面标题 | ⚠️ 不规范 | 每页独立标题 |
| Meta描述 | ⚠️ 缺失 | 每页独立描述 |
| H1标签 | ⚠️ 缺失 | 添加每页主标题 |
| 图片Alt | ⚠️ 不完整 | 添加描述性Alt |
| 内容量 | ⚠️ 不足 | 增加至每页500+词 |
| 内链结构 | ✅ 良好 | 保持 |
| Sitemap | ✅ 存在 | 保持更新 |

### 7.2 改进建议

- 目标关键词：automatic gate, garage door, industrial door, Richmond BC
- 添加 Schema.org 结构化数据
- 保持每周/每月更新博客

---

## 八、差异化竞争策略

### 8.1 VanGATE vs 竞争对手

| 维度 | VanGATE优势 | 竞争对手 |
|------|-----------|---------|
| 定位 | 制造商+安装+维保全流程 | 多为经销商 |
| 服务 | BC西部本地化 | 部分为全国/国际品牌 |
| 能力 | CNC内部制造 | 外包加工 |
| 产品 | 垂直整合 | 采购组装 |

### 8.2 网站差异化体现

- 首页突出"Full In-House Manufacturing"（内部制造）
- 强调本地服务、快速响应
- 展示真实项目案例和客户评价
- 技术博客内容建立专业形象

---

## 九、实施优先级

| 阶段 | 内容 | 预期时间 | 影响 |
|------|------|---------|------|
| **Phase 1** | 首页重构、导航优化、移动端适配 | 2-3周 | 价值主张、用户体验 |
| **Phase 2** | Solutions/Custom页面、产品目录 | 2-3周 | 转化率 |
| **Phase 3** | Projects案例系统、Why Us页面 | 2周 | 商业客户信任 |
| **Phase 4** | Resources博客、SEO优化 | 持续 | 搜索排名 |

---

## 十、成功指标

| 指标 | 当前值 | 目标值（6个月） |
|------|--------|----------------|
| 自然搜索流量 | 153/月 | 300+/月 |
| 关键词排名Top10 | 少数 | 核心词Top10 |
| 页面停留时间 | - | >2分钟 |
| 表单提交 | - | +50% |
| Google评分 | 4.9/5 | 保持 |

---

*文档基于 BDC Digital Assessment (2026-06-05) 和 BDC Website Report 生成*
