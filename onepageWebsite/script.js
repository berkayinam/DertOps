// DevOps Bootcamp Episodes Data
const episodes = [
    {
        title: "DertOps Bölüm 1 DevOps & SRE & Platform Engineer",
        subtitle: "Neden DevOps?",
        date: "26.06.2025",
        week: "Hafta 1",
        description: "DevOps kültürünün temelleri ve neden DevOps'a ihtiyaç duyduğumuzu anlatan kapsamlı bir giriş bölümü.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 2 Siyah ekranda beyaz hayaller",
        subtitle: "Linux: Sistem Temelleri",
        date: "03.07.2025",
        week: "Hafta 2",
        description: "Linux işletim sisteminin temelleri ve sistem yönetimi konularına giriş.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 3 Ayrı branchlerin insanıyız",
        subtitle: "Git & Github Temelleri",
        date: "10.07.2025",
        week: "Hafta 3",
        description: "Versiyon kontrol sistemleri ve Git/Github kullanımı.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 4 İndir, kaldır, zıplat, çalışıyorsa dokunma",
        subtitle: "Docker Temelleri",
        date: "17.07.2025",
        week: "Hafta 4",
        description: "Konteyner teknolojileri ve Docker'ın temel kullanımı.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 5 Bi' komutla 50 sunucu devirmek ister misin?",
        subtitle: "Ansible ile Otomasyon",
        date: "24.07.2025",
        week: "Hafta 5",
        description: "Konfigürasyon yönetimi ve otomasyon araçları.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 6 Terraform apply dedim, cloud sarsıldı",
        subtitle: "Terraform Temelleri",
        date: "31.07.2025",
        week: "Hafta 6",
        description: "Infrastructure as Code ve Terraform kullanımı.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 7 Pod ayakta, servis yok",
        subtitle: "Kubernetes",
        date: "07.08.2025",
        week: "Hafta 7",
        description: "Konteyner orkestrasyonu ve Kubernetes temelleri.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 8 Deploy ettik, sistem düştü",
        subtitle: "CI/CD Jenkins",
        date: "14.08.2025",
        week: "Hafta 8",
        description: "Sürekli entegrasyon ve dağıtım süreçleri.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 9 Sunucu düştü mü? Yok, sadece gözüm dalmış",
        subtitle: "Prometheus ve Grafana",
        date: "21.08.2025",
        week: "Hafta 9",
        description: "İzleme, loglama ve metrik toplama araçları.",
        videoUrl: "#",
        githubUrl: "#"
    },
    {
        title: "DertOps Bölüm 10 – Gerçek Proje ve Yol Haritası",
        subtitle: "Google sekmesi 99 oldu: Artık hazırız",
        date: "28.08.2025",
        week: "Hafta 10",
        description: "Final projesi ve DevOps yolculuğunda ilerleme planı.",
        videoUrl: "#",
        githubUrl: "#"
    }
];

// AI Agents Forum Posts Data
const forumPosts = [
    {
        title: "AI Agents ile Otomasyon: Gelecek mi, Gerçek mi?",
        author: "Adem Berke Nargül",
        date: "15.03.2024",
        excerpt: "Yapay zeka destekli otomasyon araçlarının DevOps süreçlerine entegrasyonu ve gelecekteki rolü hakkında detaylı bir analiz.",
        tags: ["AI", "Automation", "DevOps"]
    },
    {
        title: "LLM'ler ile Infrastructure as Code: Yeni Bir Yaklaşım",
        author: "Berkay İnam",
        date: "10.03.2024",
        excerpt: "Büyük dil modellerinin altyapı kodlaması süreçlerini nasıl dönüştürebileceğine dair görüşler ve deneyimler.",
        tags: ["LLM", "IaC", "AI"]
    }
];

// Function to create episode cards
function createEpisodeCards() {
    const bootcampSection = document.querySelector('#bootcamp .grid');
    episodes.forEach(episode => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300';
        card.innerHTML = `
            <div class="p-6">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-900">${episode.title}</h3>
                        <p class="mt-1 text-blue-600">${episode.subtitle}</p>
                    </div>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        ${episode.week}
                    </span>
                </div>
                <p class="mt-4 text-gray-500">${episode.description}</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-sm text-gray-500">${episode.date}</span>
                    <div class="space-x-2">
                        <a href="${episode.videoUrl}" class="text-blue-600 hover:text-blue-800">Video</a>
                        <a href="${episode.githubUrl}" class="text-blue-600 hover:text-blue-800">GitHub</a>
                    </div>
                </div>
            </div>
        `;
        bootcampSection.appendChild(card);
    });
}

// Function to create forum posts
function createForumPosts() {
    const forumSection = document.querySelector('#ai-agents .space-y-8');
    forumPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300';
        postElement.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-xl font-semibold text-gray-900">${post.title}</h3>
                    <p class="mt-2 text-gray-600">${post.excerpt}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-500">${post.date}</p>
                    <p class="text-sm font-medium text-gray-900">${post.author}</p>
                </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
                ${post.tags.map(tag => `
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        `;
        forumSection.appendChild(postElement);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createEpisodeCards();
    createForumPosts();
}); 