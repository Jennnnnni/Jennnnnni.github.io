/* =========================================================================
   2. 页面自动渲染引擎 (核心逻辑：读取上面的数据并自动生成网页) 
   ========================================================================= */
function renderAllContent() {
    // 渲染经历页
    const expContainer = document.getElementById('experience-list-container');
    if(expContainer) {
        expContainer.innerHTML = PORTFOLIO_DATA.experiences.map(exp => `
            <div class="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-10 mb-20">
                <div class="font-black text-xl md:text-right text-gray-200">${exp.year}</div>
                <div class="space-y-12">
                    ${exp.items.map(item => `
                        <div>
                            <h4 class="font-black text-lg mb-4">${item.title}</h4>
                            <p class="text-sm leading-relaxed text-gray-600">${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // 渲染每日创作
    const dailyContainer = document.getElementById('daily-creation-list-container');
    if(dailyContainer) {
        dailyContainer.innerHTML = PORTFOLIO_DATA.dailyCreations.map(group => `
            <div class="mb-20">
                <h2 class="text-2xl font-black uppercase tracking-widest mb-8 text-gray-300">${group.month}</h2>
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
                    ${group.items.map(item => `
                        <div class="glare-hover-effect relative aspect-square overflow-hidden cursor-pointer group bg-gray-100 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl z-0 hover:z-10" 
                             onclick='openLightbox(${JSON.stringify(item.images)}, "${item.date}")'>
                            <img src="${item.cover}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                <span class="text-white/90 font-black tracking-widest text-4xl md:text-5xl lg:text-6xl drop-shadow-md">${item.day}</span>
                                ${item.images.length > 1 ? `<span class="absolute bottom-3 right-4 text-white/80 text-xs font-bold tracking-widest">+${item.images.length}</span>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // 渲染提示词实验页
    const promptContainer = document.getElementById('prompt-list-container');
    if(promptContainer) {
        promptContainer.innerHTML = PORTFOLIO_DATA.prompts.map((prompt, index) => {
            const isEven = index % 2 === 0;
            return `
            <div class="grid grid-cols-1 lg:grid-cols-${isEven ? '[1fr_1.2fr]' : '[1.2fr_1fr]'} gap-10 items-center">
                <div class="${isEven ? '' : 'order-2 lg:order-1'} flex flex-col space-y-6">
                    <h3 class="text-2xl font-black tracking-tight">${prompt.title}</h3>
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 relative group">
                        <span class="absolute top-0 right-0 bg-black text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">PROMPT</span>
                        <p class="text-sm text-gray-700 font-mono leading-relaxed pt-2">${prompt.promptText}</p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        ${prompt.tags.map((tag, i) => `
                            <span class="px-3 py-1 ${i === 0 ? 'bg-black text-white' : (i === 1 ? 'border border-black text-black' : 'border border-gray-300 text-gray-500')} text-xs font-bold rounded-full">${tag}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="${isEven ? '' : 'order-1 lg:order-2'} rounded-2xl overflow-hidden bg-gray-100 shadow-lg cursor-pointer" onclick="openLightbox('${prompt.hiresImage}', '${prompt.title}')">
                    <img src="${prompt.image}" alt="${prompt.title}" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700">
                </div>
            </div>
            `;
        }).join('');
    }

    // 渲染视频页
    const videoContainer = document.getElementById('video-list-container');
    if(videoContainer) {
        videoContainer.innerHTML = PORTFOLIO_DATA.videos.map(video => `
            <div class="group relative aspect-video bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500" onclick="openVideoModal('${video.videoSrc}')">
                <img src="${video.cover}" class="object-cover w-full h-full transition duration-700 group-hover:scale-105 group-hover:blur-[2px]">
                <div class="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-500">
                    <div class="w-16 h-16 rounded-full border-[3px] border-white flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                        <div class="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-xl md:text-2xl font-bold tracking-tight mb-1">${video.title}</h3>
                    <p class="text-xs md:text-sm text-gray-300">${video.desc}</p>
                </div>
            </div>
        `).join('');
    }
}

/* =========================================================================
   3. 网站基础交互逻辑 (打字机、导航、复制等)
   ========================================================================= */
const homeText = "您好,我是Jeni,希望在这您可以更好地了解到我,期待与您相识!";
const typingElement = document.getElementById('home-typing-text');
let index = 0;
let typingStarted = false;

function startTyping() { if (typingStarted) return; typingStarted = true; type(); }
function type() { if (index < homeText.length) { typingElement.textContent += homeText.charAt(index); index++; setTimeout(type, 70 + Math.random() * 40); } }

function navigateTo(pageId) {
    const pages = ['home-page', 'bio-page', 'experience-page', 'images-page', 'daily-creation-page', 'prompt-experiment-page', 'video-page', 'contact-page'];
    const navToggle = document.getElementById('nav-toggle');
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    const target = document.getElementById(pageId + '-page');
    if (target) target.classList.add('active');
    
    if (pageId === 'home') {
        navToggle.textContent = '个人简介';
        navToggle.onclick = () => navigateTo('bio');
    } else {
        navToggle.textContent = '返回首页';
        navToggle.onclick = () => navigateTo('home');
    }
}

function toggleBio() {
    const isBioActive = document.getElementById('bio-page').classList.contains('active');
    navigateTo(isBioActive ? 'home' : 'bio');
}

// 【终极修复】业界最强兼容版复制功能 (完美兼容 iOS Safari/Android)
function copyToClipboard(text, label) {
    // 优先尝试现代浏览器的 clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`${label} Copied`);
        }).catch(() => {
            fallbackCopy(text, label);
        });
    } else {
        fallbackCopy(text, label);
    }
}

function fallbackCopy(text, label) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // 避免呼出手机键盘、避免页面跳动
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed'; // 防止页面滚动
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    textArea.style.fontSize = '16px'; // 防止 iOS Safari 自动缩放
    
    document.body.appendChild(textArea);
    
    // 针对 iOS 特殊处理选择逻辑
    if (navigator.userAgent.match(/ipad|iphone/i)) {
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
    } else {
        textArea.select();
    }
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast(`${label} Copied`);
        } else {
            console.error('复制失败');
        }
    } catch (err) {
        console.error('降级复制报错:', err);
    }
    
    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.getElementById('copy-toast');
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2000);
}

/* =========================================================================
   4. Lightbox 多图轮播查看器控制
   ========================================================================= */
let currentGallery = [];
let currentGalleryIndex = 0;

function openLightbox(srcData, date) {
    currentGallery = Array.isArray(srcData) ? srcData : [srcData];
    currentGalleryIndex = 0;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const dateEl = document.getElementById('lightbox-date');
    
    img.classList.remove('opacity-0');
    img.src = currentGallery[currentGalleryIndex];
    dateEl.textContent = date;
    
    updateLightboxUI();
    lb.classList.remove('opacity-0', 'pointer-events-none');
    lb.classList.add('opacity-100', 'pointer-events-auto');
    
    setTimeout(() => {
        img.classList.remove('scale-95');
        img.classList.add('scale-100');
    }, 50);
}

function updateLightboxUI() {
    const counterEl = document.getElementById('lightbox-counter');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    if (currentGallery.length > 1) {
        counterEl.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
        counterEl.classList.remove('hidden');
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        prevBtn.style.opacity = currentGalleryIndex === 0 ? '0.2' : '1';
        prevBtn.style.pointerEvents = currentGalleryIndex === 0 ? 'none' : 'auto';
        nextBtn.style.opacity = currentGalleryIndex === currentGallery.length - 1 ? '0.2' : '1';
        nextBtn.style.pointerEvents = currentGalleryIndex === currentGallery.length - 1 ? 'none' : 'auto';
    } else {
        counterEl.classList.add('hidden');
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }
}

function changeImage(e, direction) {
    if (e) e.stopPropagation(); 
    const newIndex = currentGalleryIndex + direction;
    if (newIndex >= 0 && newIndex < currentGallery.length) {
        currentGalleryIndex = newIndex;
        const img = document.getElementById('lightbox-img');
        img.classList.add('opacity-0');
        setTimeout(() => {
            img.src = currentGallery[currentGalleryIndex];
            img.onload = () => {
                img.classList.remove('opacity-0');
                updateLightboxUI();
            };
        }, 300); 
    }
}

function closeLightbox(e) {
    if (e && e.target.id !== 'lightbox' && e.target.id !== 'lightbox-close-btn') return;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    
    lb.classList.remove('opacity-100', 'pointer-events-auto');
    lb.classList.add('opacity-0', 'pointer-events-none');
    img.classList.remove('scale-100');
    img.classList.add('scale-95');
    
    setTimeout(() => { img.src = ''; currentGallery = []; }, 500);
}

/* =========================================================================
   5. 视频弹窗控制
   ========================================================================= */
function openVideoModal(videoSrc) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video-player');
    video.src = videoSrc;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    setTimeout(() => {
        video.classList.remove('scale-95');
        video.classList.add('scale-100');
        video.play().catch(e => console.log("自动播放被拦截:", e));
    }, 50);
}

function closeVideoModal(e) {
    if (e && e.target.id !== 'video-modal' && e.target.id !== 'video-close-btn') return;
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video-player');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    video.classList.remove('scale-100');
    video.classList.add('scale-95');
    
    setTimeout(() => { video.pause(); video.src = ''; }, 500);
}

// 页面初始化：先渲染数据，再启动打字机动画
window.onload = () => { 
    renderAllContent(); // 触发自动渲染引擎！
    setTimeout(startTyping, 600); 
};
