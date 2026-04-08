"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Monitor, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Globe,
  Sparkles,
  Menu,
  X,
  Share2,
  MessageCircle,
  Link2,
  Camera,
  MessageSquare,
  Zap,
  Briefcase
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Eğitimler", href: "#eğitimler" },
    { name: "Online Sınav", href: "#online-sinav" },
    { name: "Sertifika", href: "#sertifika" },
    { name: "Hakkımızda", href: "#hakkımızda" },
  ];

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Floating Social Buttons */}
      <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-4">
        {/* Instagram Link (Custom SVG since it's missing in lucide version) */}
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://instagram.com/serenakademi" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg"
          title="Instagram"
        >
          <Camera size={28} />
        </motion.a>
        
        {/* WhatsApp Link */}
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/905531359908" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg"
          title="WhatsApp Destek Hattı"
        >
          <MessageCircle size={28} />
        </motion.a>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white shadow-md border-b border-gray-100 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-20 w-64 transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Seren Akademi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-bold tracking-widest text-gray-700 hover:text-primary transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-4 w-px bg-gray-200" />
              <a 
                href="https://wa.me/905531359908?text=Merhaba, sertifikamı almak istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95"
              >
                Sertifikamı Hemen Al
              </a>
            </div>

            {/* Mobile Toggle - Positioned Absolute for centered layout */}
            <button 
              className="lg:hidden absolute right-6 top-8 p-2 rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] flex flex-col bg-white lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-50">
              <div className="relative h-12 w-40">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full bg-gray-100 text-gray-900"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-12">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-extrabold text-gray-900 active:text-primary"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-12 border-t border-gray-100"
              >
                <p className="text-gray-500 font-medium mb-6 uppercase tracking-widest text-sm">Hızlı İletişim</p>
                <a 
                  href="https://wa.me/905531359908"
                  className="flex items-center gap-4 text-2xl font-bold text-primary mb-12"
                >
                  0553 135 99 08
                </a>
                
                <div className="flex gap-6">
                  {[Share2, MessageCircle, Link2].map((Icon, idx) => (
                    <div key={idx} className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600">
                      <Icon size={24} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="p-8 border-t border-gray-50">
              <a 
                href="https://wa.me/905531359908?text=Merhaba, sertifikamı almak istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-2xl bg-primary py-5 text-xl font-bold text-white shadow-xl shadow-primary/20"
              >
                Sertifikamı Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with top padding for the fixed header */}
      <main className="flex-1 pt-48 md:pt-64">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pb-20">
          <div className="container mx-auto px-6 lg:px-12 z-10">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div 
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="flex flex-col gap-8"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                  <Sparkles size={14} />
                  Kariyer Odaklı Eğitim Platformu
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="font-space-grotesk text-6xl font-black leading-[1] tracking-tighter text-white md:text-8xl lg:text-9xl"
                >
                  Mesleğinde <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent italic text-5xl md:text-7xl lg:text-8xl">Profesyonelleş.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="max-w-xl text-xl leading-relaxed text-gray-300 md:text-2xl font-medium"
                >
                  Mesleğinde profesyonelleşmek için en doğru adrestesin. Uluslararası geçerli sertifikalarımızla kariyerinde yeni bir sayfa aç.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col gap-5 sm:flex-row">
                  <a 
                    href="https://wa.me/905531359908?text=Merhaba, profesyonel eğitimler hakkında bilgi almak istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-black text-background transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
                  >
                    HEMEN KEŞFET
                    <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />
                  </a>
                  <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-white/10 bg-white/5 px-10 py-5 text-lg font-black text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
                    BİZE ULAŞIN
                  </button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square lg:h-[750px]"
              >
                <div className="absolute -inset-10 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
                <div className="relative h-full w-full overflow-hidden rounded-[60px] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] bg-card/50">
                  <Image
                    src="/hero.jpg"
                    alt="Seren Akademi Hero"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  {/* Premium Floating Badge */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-12 glass rounded-3xl p-8 border border-white/20 backdrop-blur-2xl"
                  >
                    <div className="text-center">
                      <p className="text-4xl font-black text-white">100%</p>
                      <p className="text-xs text-primary font-black uppercase tracking-widest mt-1">Profesyonel Eğitim</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Asymmetric Grid */}
        <section id="eğitimler" className="py-40 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Neler Sunuyoruz?</span>
                <h2 className="font-space-grotesk text-5xl font-black text-white md:text-7xl mt-4 leading-none tracking-tighter">
                  Eğitimin <br /> <span className="text-muted-foreground/30">Zirvesi.</span>
                </h2>
              </div>
              <p className="text-gray-400 text-xl max-w-sm font-medium">Uzmanlık alanınızda fark yaratmanız için tasarlanmış profesyonel eğitim portalı.</p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <motion.div 
                whileHover={{ y: -15 }}
                className="group relative overflow-hidden rounded-[40px] bg-white/[0.03] p-1 border border-white/5 transition-all hover:bg-white/[0.06] hover:border-primary/50"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[36px]">
                  <Image src="/egitim-paneli.jpg" alt="Eğitim Paneli" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
                    <Monitor size={32} />
                  </div>
                  <h3 className="mb-4 text-3xl font-black text-white tracking-tight">Eğitim Paneli</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">Sektörel uzmanlık derslerinizi içeren kapsamlı eğitim portalı erişimi.</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                id="online-sinav"
                whileHover={{ y: -15 }}
                className="group relative overflow-hidden rounded-[40px] bg-white/[0.03] p-1 border border-white/5 transition-all hover:bg-white/[0.06] hover:border-secondary/50"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[36px]">
                  <Image src="/online-sinav.jpg" alt="Online Sınav" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white shadow-xl shadow-secondary/20">
                    <Zap size={32} />
                  </div>
                  <h3 className="mb-4 text-3xl font-black text-white tracking-tight">Hızlı Sınav</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">Öğrendiklerinizi profesyonel sınav sistemimizle anında tescilleyin.</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                id="sertifika"
                whileHover={{ y: -15 }}
                className="group relative overflow-hidden rounded-[40px] bg-white/[0.03] p-1 border border-white/5 transition-all hover:bg-white/[0.06] hover:border-accent/50"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[36px]">
                  <Image src="/sertifika.jpg" alt="Sertifika" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-white shadow-xl shadow-accent/20">
                    <Award size={32} />
                  </div>
                  <h3 className="mb-4 text-3xl font-black text-white tracking-tight">Resmi Sertifika</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">Mesleğinizde profesyonelleştiğinizi gösteren resmi ve onaylı sertifikanız.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professionalism Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-16 glass rounded-[60px] p-12 md:p-20 border border-white/10">
              <div className="flex-1">
                <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <Briefcase size={36} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Mesleki Uzmanlık ve Kariyer Garantisi</h2>
                <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8">
                  Seren Akademi, sadece bilgi vermez; sizi sektörde aranan bir profesyonele dönüştürür. Verdiğimiz her sertifika, sizin mesleki yetkinliğinizin ve disiplinli eğitiminizin bir kanıtıdır.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Kariyer Danışmanlığı",
                    "Uluslararası Akreditasyon",
                    "Mesleki Uzmanlık Sertifikası",
                    "Sektörel İş Ağı Erişimi"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-bold">
                      <CheckCircle2 className="text-primary" size={24} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 w-64 md:h-96 md:w-96 flex-shrink-0">
                <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full" />
                <Award className="relative w-full h-full text-white/20 animate-pulse" strokeWidth={1} />
                <Award className="absolute inset-0 w-full h-full text-primary" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="hakkımızda" className="py-40 bg-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid items-center gap-24 lg:grid-cols-2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative mt-20 aspect-[3/4] overflow-hidden rounded-[50px] shadow-2xl border-4 border-white/10"
                  >
                    <Image src="/1.jpg" alt="Akademi 1" fill className="object-cover" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[3/4] overflow-hidden rounded-[50px] shadow-2xl border-4 border-white/10"
                  >
                    <Image src="/2.jpg" alt="Akademi 2" fill className="object-cover" />
                  </motion.div>
                </div>
                <div className="absolute -z-10 -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
              </div>

              <div className="flex flex-col gap-10">
                <h2 className="font-space-grotesk text-5xl font-black text-white md:text-7xl leading-tight">Profesyonel <br /> Bir Gelecek.</h2>
                <p className="text-2xl text-gray-300 font-medium leading-relaxed">
                  Seren Akademi'de eğitim sadece bir süreç değil, hayat boyu sürecek bir profesyonelliğin başlangıcıdır.
                </p>
                
                <div className="grid gap-8">
                  {[
                    { icon: <Users />, title: "Elit Eğitmenler", desc: "Sektörün en iyilerinden doğrudan ders alın." },
                    { icon: <Globe />, title: "Global Standartlar", desc: "Dünya standartlarında eğitim metodolojisi." },
                    { icon: <CheckCircle2 />, title: "Garantili Sonuç", desc: "Sizi hedefinize ulaştıran kesin başarı planı." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group items-start">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/5 text-primary border border-white/10 transition-all group-hover:bg-primary group-hover:text-white group-hover:-rotate-6">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section className="py-40">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-[80px] bg-primary p-16 text-center md:p-32 shadow-[0_40px_100px_-20px_rgba(99,102,241,0.5)]">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10 mx-auto max-w-4xl">
                <h2 className="font-space-grotesk text-6xl font-black text-white md:text-9xl mb-12 tracking-tighter leading-none">
                  SEREN <br /> AKADEMİ.
                </h2>
                <p className="mb-14 text-2xl md:text-3xl text-white/90 font-bold max-w-2xl mx-auto">
                  Gelecek burada başlıyor. Sertifikanızı alın ve mesleğinizde uzmanlaşın.
                </p>
                <a 
                  href="https://wa.me/905531359908?text=Merhaba, kaydolmak istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-16 py-7 text-2xl font-black text-primary transition-all hover:scale-110 active:scale-95 shadow-2xl"
                >
                  ŞİMDİ BAŞLA
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="relative h-16 w-52 mb-10">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <p className="max-w-md text-xl text-gray-400 font-medium leading-relaxed">
                Eğitimde mükemmelliği hedefleyen Seren Akademi, modern altyapısı ve profesyonel sertifikasyon sistemiyle her zaman yanınızda.
              </p>
            </div>
            
            <div>
              <h4 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white">Navigasyon</h4>
              <ul className="grid gap-6 text-lg font-bold text-gray-500">
                <li><a href="#eğitimler" className="hover:text-primary transition-colors">Eğitimler</a></li>
                <li><a href="#hakkımızda" className="hover:text-primary transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SSS</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">İletişim</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white">İletişim</h4>
              <ul className="grid gap-6 text-lg font-bold text-gray-500">
                <li className="text-white">info@serenakademi.com</li>
                <li className="text-primary text-2xl">0553 135 99 08</li>
                <li>İstanbul, TR</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-32 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 font-bold">© {new Date().getFullYear()} Seren Akademi. Bütün Hakları Saklıdır.</p>
            <div className="flex gap-8 text-gray-400 font-bold uppercase text-xs tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
