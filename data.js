/* =========================================================================
   1. 数据控制中心 (Data Center) 
   以后所有的更新都只需要在这里填表！不需要修改任何 HTML 代码！
   ========================================================================= */
const PORTFOLIO_DATA = {
    
    // 模块 A：工作经历数据
    experiences: [
        {
            year: "2025",
            items: [
                { title: "天津电视台“色彩中国之津门大先生”AIGC单元制作", desc: "全程参与视频全流程工作，从分镜设计、AIGC素材审核到最终剪辑成片，严格把控细节，确保视频符合传播规范及项目要求。" },
                { title: "曹云金短剧“大周令”AIGC内容制作", desc: "运用 NanoBananaPro、Google Veo3.1 等工具，制作千人攻城场面及玄幻特效，提升内容吸引力并按时交付。" },
                { title: "“开心麻花”AI真人剧测试制作", desc: "使用 NanoBananaPro、SeeDance2.0 制作枪战相关特效片段，探索 AI 在真人剧场景中的应用方法。" },
                { title: "MR作品“寻枪！”", desc: "入围第十五届北京国际电影节无界-沉浸单元，负责数字内容策划与可视化呈现。" }
            ]
        },
        {
            year: "2024",
            items: [
                { title: "天津美术馆数字艺术展览“一花一世界”MR项目", desc: "负责 MR 展区故事构思与数字内容策划，结合 AI 技术设计虚拟内容，联动现实展区形成完整故事闭环。" },
                { title: "天津天塔AR文旅游戏项目“保卫天塔之拯救塔塔”", desc: "独立完成项目创意策划，结合 AR 技术设计适配文旅场景的内容形式与呈现风格。" },
                { title: "天津美术学院人工智能通识课授课", desc: "主讲 AICG 图像生成底层逻辑、ComfyUI 搭建与使用，以及 AIGC 作品创作思维。" },
                { title: "数字艺术作品“算法牧场”执行策划", desc: "运用 AI 技术辅助作品创作，负责内容落地与质量把控，作品成功入展西安“混沌蝴蝶”及加拿大 IJCAI。" }
            ]
        },
        {
            year: "2023",
            items: [
                { title: "天津美术馆MR展览“图灵花园”项目", desc: "全程跟进 3 大展区（造物生、坠入虚无、未知）的数字内容策划与实景落地，协同多团队明确需求与交付标准。" }
            ]
        }
    ],

    // 模块 B：每日创作图片库
    // 每一项可以是单图，也可以是多图 (写在 images 数组里)
    dailyCreations: [
        {
            month: "OCT 2025",
            items: [
                { day: "24", date: "OCT 24, 2025", cover: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop"] },
                { day: "23", date: "OCT 23, 2025", cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop"] },
                { day: "22", date: "OCT 22, 2025", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"] },
                { day: "21", date: "OCT 21, 2025", cover: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop"] },
                { day: "20", date: "OCT 20, 2025", cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"] },
                { day: "19", date: "OCT 19, 2025", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"] },
                { day: "18", date: "OCT 18, 2025", cover: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop"] }
            ]
        },
        {
            month: "SEP 2025",
            items: [
                { day: "15", date: "SEP 15, 2025", cover: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop", images: ["https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop"] }
            ]
        }
    ],

    // 模块 C：提示词实验案例库
    prompts: [
        {
            title: "赛博花卉 / Cybernetic Flora",
            promptText: "\"A hyper-realistic macro shot of a bioluminescent mechanical flower blooming in a dark forest, neon blue and magenta accents, intricate wiring masquerading as veins, unreal engine 5 render, cinematic lighting, 8k resolution, photorealistic --ar 16:9 --v 6.0\"",
            tags: ["Midjourney", "Macro", "--v 6.0"],
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
            hiresImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "混沌回廊 / Chaos Corridor",
            promptText: "\"Abstract architectural space, endless corridor with shifting gravity, monochrome with sudden bursts of crimson red, brutalist concrete structures blending with liquid metal, inspired by Escher and Zaha Hadid, volumetric fog, dramatic chiaroscuro --ar 4:5 --style raw\"",
            tags: ["ComfyUI", "Architecture", "SDXL"],
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
            hiresImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
        }
    ],

    // 模块 D：视频项目库
    videos: [
        {
            title: "天津电视台《色彩中国》",
            desc: "AIGC 单元制作 / 2025",
            cover: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
            videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            title: "曹云金短剧《大周令》",
            desc: "Veo3.1 千人攻城特效 / 2025",
            cover: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
            videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            title: "天津美术馆 MR展览《一花一世界》",
            desc: "数字内容策划 / 2024",
            cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
            videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            title: "“开心麻花” AI 真人剧测试",
            desc: "SeeDance2.0 动态生成 / 2025",
            cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    ]
};