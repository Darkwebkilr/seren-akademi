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
  Zap,
  Briefcase,
  ShieldCheck,
  FileText,
  ChevronDown,
  HelpCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import type { Variants } from "framer-motion";

// Advanced animation variants
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

// Smooth Scroll Function with Animation
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    const offset = 100; // Header height offset
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Eğitimler", href: "#eğitimler" },
    { name: "Süreç", href: "#surec" },
    { name: "Sertifika", href: "#sertifika" },
    { name: "SSS", href: "#sss" },
    { name: "Hakkımızda", href: "#hakkımızda" },
  ];

  const faqData = [
    { q: "Sertifikalar uluslararası geçerli mi?", a: "Evet, Seren Akademi'den alacağınız tüm sertifikalar uluslararası standartlarda akredite edilmiş ve global geçerliliğe sahiptir." },
    { q: "Eğitimlere ne zaman başlayabilirim?", a: "Kaydınız tamamlandığı an profesyonel eğitim portalımıza erişim sağlayabilir ve hemen öğrenmeye başlayabilirsiniz." },
    { q: "Sınav süreci nasıl işliyor?", a: "Eğitiminizi tamamladıktan sonra online platformumuz üzerinden sınava girersiniz. Başarılı olmanız durumunda sertifikanız anında dijital olarak oluşturulur." },
    { q: "Teknik destek sağlıyor musunuz?", a: "7/24 aktif WhatsApp destek hattımız ve öğrenci panelimiz üzerinden her türlü teknik sorunuzda yanınızdayız." }
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Page Reveal Animation Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-background flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative h-24 w-64"
            >
              <Image src="/logo.png" alt="Loading..." fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-4">
        <motion.a 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href="https://instagram.com/serenakademi" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-xl"
        >
          <Camera size={28} />
        </motion.a>
        
        <motion.a 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/905531359908" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-xl"
        >
          <MessageCircle size={28} />
        </motion.a>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
          isScrolled ? "py-3 shadow-lg" : "py-6 shadow-md"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-16 w-52 transition-transform hover:scale-105 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image src="/logo.png" alt="Seren Akademi Logo" fill className="object-contain" priority />
            </motion.div>
            
            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-bold tracking-widest text-gray-700 hover:text-primary transition-all uppercase hover:tracking-[0.2em]"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="h-6 w-px bg-gray-200" />
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/905531359908?text=Merhaba, sertifikamı almak istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95"
              >
                Sertifikamı Hemen Al
              </motion.a>
            </div>

            <button className="lg:hidden p-2 rounded-xl text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-[110] flex flex-col bg-white lg:hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-50">
              <div className="relative h-12 w-40"><Image src="/logo.png" alt="Logo" fill className="object-contain" /></div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 rounded-full bg-gray-100 text-gray-900"><X size={28} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-12 text-center">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a key={link.name} href={link.href} onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, link.href); }} className="text-4xl font-extrabold text-gray-900 active:text-primary transition-all">
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-16 pt-12 border-t border-gray-100">
                <p className="text-gray-500 font-medium mb-6 uppercase tracking-widest text-sm">Hızlı İletişim</p>
                <a href="https://wa.me/905531359908" className="text-3xl font-black text-primary mb-12 block">0553 135 99 08</a>
              </div>
            </div>
            <div className="p-8 border-t border-gray-50">
              <a href="https://wa.me/905531359908?text=Merhaba, sertifikamı almak istiyorum." target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-2xl bg-primary py-5 text-xl font-bold text-white shadow-xl shadow-primary/20">Sertifikamı Al</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pb-20 text-center">
          <div className="container mx-auto px-6 lg:px-12 z-10 flex flex-col items-center">
            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={containerVariants} 
              className="flex flex-col items-center gap-8 max-w-5xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                <Sparkles size={14} /> Profesyonel Kariyer Akademisi
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp} 
                className="font-space-grotesk text-6xl font-black leading-[1] tracking-tighter text-white md:text-8xl lg:text-9xl"
              >
                Mesleğinde <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent italic text-5xl md:text-7xl lg:text-8xl">Profesyonelleş.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp} 
                className="max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl font-medium"
              >
                Sektörde aranan bir uzman olmak için Seren Akademi'nin profesyonel eğitim portalına katılın. Uluslararası geçerli sertifikanızla fark yaratın.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col gap-5 sm:flex-row justify-center">
                <a 
                  href="#surec" 
                  onClick={(e) => scrollToSection(e, "#surec")} 
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-black text-background transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
                >
                  HİÇ DURMA, BAŞLA <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={scaleIn} 
              className="relative w-full max-w-5xl aspect-video lg:h-[600px] mt-16"
            >
              <div className="absolute -inset-10 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
              <div className="relative h-full w-full overflow-hidden rounded-[60px] border border-white/10 shadow-2xl bg-card/50">
                <Image src="/hero.jpg" alt="Hero" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 right-12 glass rounded-3xl p-8 border border-white/20 backdrop-blur-2xl">
                  <div className="text-center">
                    <p className="text-4xl font-black text-white">100%</p>
                    <p className="text-xs text-primary font-black uppercase tracking-widest mt-1">Erişim Garantisi</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="eğitimler" className="py-40 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 text-center">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Uzmanlık Alanları</span>
              <h2 className="font-space-grotesk text-5xl font-black text-white md:text-7xl mt-4 tracking-tighter">Neler Öğreneceksiniz?</h2>
            </motion.div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                { img: "/egitim-paneli.jpg", icon: <Monitor size={32} />, title: "Profesyonel Panel", color: "primary", desc: "Zenginleştirilmiş içeriklerle dolu, her cihazdan erişilebilen kullanıcı dostu portal." },
                { img: "/online-sinav.jpg", icon: <ShieldCheck size={32} />, title: "Güvenli Sınav", color: "secondary", desc: "Bilginizi en doğru şekilde ölçen, anlık sonuç veren modern sınav sistemi." },
                { img: "/sertifika.jpg", icon: <Award size={32} />, title: "Resmi Sertifika", color: "accent", desc: "Mesleki yeterliliğinizi kanıtlayan, iş dünyasında kapıları açan resmi belge." }
              ].map((feature, i) => (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} key={i} className="group relative overflow-hidden rounded-[40px] bg-white/[0.03] p-1 border border-white/5 transition-all hover:bg-white/[0.06]">
                  <div className="relative h-72 w-full overflow-hidden rounded-[36px]">
                    <Image src={feature.img} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
                  <div className="p-10">
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-${feature.color} text-white shadow-xl`}>{feature.icon}</div>
                    <h3 className="mb-4 text-3xl font-black text-white tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="surec" className="py-40 bg-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-24">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Adım Adım</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter">Başarıya Giden Yol</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { icon: <Users />, title: "Kayıt Ol", desc: "WhatsApp üzerinden hızlıca kaydınızı oluşturun." },
                { icon: <BookOpen />, title: "Eğitim Al", desc: "Portalımızdaki profesyonel dersleri tamamlayın." },
                { icon: <FileText />, title: "Sınava Gir", desc: "Online sınavla bilginizi tescilleyin." },
                { icon: <Award />, title: "Sertifika Al", desc: "Sertifikanızı anında teslim alın ve kullanın." }
              ].map((step, i) => (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="relative text-center p-8 bg-white/5 rounded-[40px] border border-white/10">
                  <div className="h-20 w-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mx-auto mb-6 text-2xl font-black">{i + 1}</div>
                  <h4 className="text-2xl font-black text-white mb-4">{step.title}</h4>
                  <p className="text-gray-400 font-medium">{step.desc}</p>
                  {i < 3 && <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/10" size={40} />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="sss" className="py-40 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Merak Edilenler</span>
                <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter mb-8">Sıkça Sorulan <br /> Sorular.</h2>
                <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white"><HelpCircle size={40} /></div>
              </div>
              <div className="flex flex-col gap-4">
                {faqData.map((faq, i) => (
                  <div key={i} className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left text-xl font-bold text-white hover:bg-white/5 transition-all">
                      {faq.q}
                      <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-8 text-gray-400 font-medium text-lg leading-relaxed">
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professionalism Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-16 glass rounded-[60px] p-12 md:p-20 border border-white/10">
              <div className="flex-1">
                <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8"><Briefcase size={36} /></div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Kariyer Garantili Eğitim</h2>
                <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8">Seren Akademi, sizi sadece eğitime tabi tutmaz, sektörde aranan bir profesyonele dönüştürür. Mesleki yetkinliğinizin kanıtı olan sertifikanızla bir adım önde olun.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Kariyer Rehberliği", "Global Akreditasyon", "Uzmanlık Belgesi", "İş Ağı Desteği"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="text-primary" size={24} />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 w-64 md:h-96 md:w-96 flex-shrink-0">
                <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full" />
                <Award className="relative w-full h-full text-white/20 animate-pulse" strokeWidth={1} />
                <Award className="absolute inset-0 w-full h-full text-primary" strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hakkımızda Section */}
        <section id="hakkımızda" className="py-40 bg-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mt-20 aspect-[3/4] overflow-hidden rounded-[50px] shadow-2xl border-4 border-white/10"><Image src="/1.jpg" alt="Akademi 1" fill className="object-cover" /></motion.div>
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[3/4] overflow-hidden rounded-[50px] shadow-2xl border-4 border-white/10"><Image src="/2.jpg" alt="Akademi 2" fill className="object-cover" /></motion.div>
                </div>
                <div className="absolute -z-10 -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
              </div>
              <div className="flex flex-col gap-10">
                <h2 className="font-space-grotesk text-5xl font-black text-white md:text-7xl leading-tight">Gelecek Sizinle <br /> Başlar.</h2>
                <p className="text-2xl text-gray-300 font-medium leading-relaxed">Eğitimin gücüne inanıyor, modern altyapımızla hayallerinizi gerçekleştirmenize rehberlik ediyoruz.</p>
                <div className="grid gap-8">
                  {[
                    { icon: <Users />, title: "Uzman Kadro", desc: "Sektör tecrübesine sahip lider eğitmenler." },
                    { icon: <Globe />, title: "Her Yerde Eğitim", desc: "Zaman ve mekan sınırı olmadan öğrenin." },
                    { icon: <CheckCircle2 />, title: "Kesin Başarı", desc: "Sizi hedefinize götüren özel metodoloji." }
                  ].map((item, idx) => (
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} key={idx} className="flex gap-8 group items-start">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/5 text-primary border border-white/10 transition-all group-hover:bg-primary group-hover:text-white group-hover:-rotate-6">{item.icon}</div>
                      <div><h4 className="text-2xl font-black text-white mb-2">{item.title}</h4><p className="text-gray-400 text-lg">{item.desc}</p></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="relative overflow-hidden rounded-[40px] sm:rounded-[60px] md:rounded-[80px] bg-primary p-8 sm:p-16 md:p-32 shadow-2xl flex flex-col items-center justify-center"
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">
                <h2 className="font-space-grotesk text-4xl sm:text-6xl md:text-9xl font-black text-white mb-8 md:mb-12 tracking-tighter leading-[0.9]">
                  SEREN <br className="hidden sm:block" /> AKADEMİ.
                </h2>
                <p className="mb-8 md:mb-14 text-lg sm:text-2xl md:text-3xl text-white/90 font-bold max-w-2xl mx-auto px-4">
                  Hayallerinize ulaşmak için profesyonel sertifikanızı hemen alın.
                </p>
                <a 
                  href="https://wa.me/905531359908?text=Merhaba, kaydolmak istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 sm:px-16 sm:py-7 text-lg sm:text-2xl font-black text-primary transition-all hover:scale-105 active:scale-95 shadow-2xl"
                >
                  ŞİMDİ BAŞLA
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="relative h-16 w-52 mb-10"><Image src="/logo.png" alt="Logo" fill className="object-contain" /></div>
              <p className="max-w-md text-xl text-gray-400 font-medium leading-relaxed">Profesyonel eğitim ve sertifikasyon sistemimizle geleceğinizi güvenle inşa edin.</p>
            </div>
            <div>
              <h4 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white">Navigasyon</h4>
              <ul className="grid gap-6 text-lg font-bold text-gray-500">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="hover:text-primary transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white">İletişim</h4>
              <ul className="grid gap-6 text-lg font-bold text-gray-500">
                <li className="text-primary text-2xl">0553 135 99 08</li>
                <li>İstanbul, TR</li>
              </ul>
            </div>
          </div>
          <div className="mt-32 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-bold">
            <p>© {new Date().getFullYear()} Seren Akademi. Tüm Hakları Saklıdır.</p>
            <div className="flex gap-8 uppercase text-xs tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
              <a href="#" className="hover:text-white transition-colors">Şartlar</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
