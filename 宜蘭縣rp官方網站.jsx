import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function YilanRPWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          宜蘭縣 RP
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          描述一下ERLC ｜雨城世界觀沉浸式角色扮演
        </p>
        <Button className="text-lg px-6 py-4 rounded-2xl shadow-xl">
          加入我們的世界
        </Button>
      </section>

      {/* Worldview */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {["山線人生", "雨城市區", "海港勢力"].map((title) => (
          <Card key={title} className="bg-slate-900/70 border-slate-700 rounded-2xl shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-slate-300 text-sm">
                每一條人生線都交織著夢想、現實與選擇，打造最真實的宜蘭故事。
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Departments */}
      <section className="py-20 px-6 bg-slate-950">
        <h2 className="text-4xl font-bold text-center mb-12">角色系統</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "宜蘭縣警察局",
            "鄉村家庭線",
            "漁港黑白勢力",
          ].map((dept) => (
            <Card key={dept} className="bg-slate-900 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dept}</h3>
                <p className="text-slate-300 text-sm">
                  專屬劇情任務與互動關係，影響整座城市的走向。
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">準備進入宜蘭的故事了嗎？</h2>
        <p className="text-slate-300 mb-8">每個選擇，都會改變這座城市。</p>
        <Button className="text-lg px-8 py-4 rounded-2xl shadow-2xl">
          立即加入 Discord
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm bg-slate-950">
        © 苗屬一夏 ERLC 宜蘭縣 RP
      </footer>
    </div>
  );
}
