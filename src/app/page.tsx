'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { TitlePage } from './(components)/TitlePage';
import Img from '../../public/img4.png';
import { ParagraphSection } from './(components)/Paragraph_Section';
import { Contact } from './(components)/Contact';

export default function Home() {
  return (
    <>
      <div>
        <Contact />
        <header
          id="home"
          className="bg-hero relative w-full aspect-[16/9] bg-cover bg-center overflow-visible scroll-m-40"
        />

        <h1 className="text-center my-12 font-bold text-5xl text-[#14532d]">
          Você sabia que a sua empresa pode ter tributos a recuperar?
        </h1>

        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/5519971027173"
            target="_blank"
            className="bg-[#25d366] hover:bg-teal-700 transition-colors text-white py-4 px-10 text-xl rounded-full shadow-lg flex items-center gap-3 z-10 relative mb-12"
          >
            <FaWhatsapp /> Quero saber mais
          </a>
        </div>

        <section className="bg-white px-6 scroll-m-40 my-8" id="services">
          <h2 className="text-5xl text-center font-extrabold text-[#0f3c64] mb-12 py-12">
            Serviços
          </h2>

          <div className="max-w-6xl mx-auto space-y-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <TitlePage title="Recuperar tributos" description={[]} />
                <div className="text-lg space-y-4 mt-6 text-justify">
                  <ParagraphSection>
                    Muitas empresas continuam pagando PIS/COFINS sobre produtos
                    monofásicos sem perceber. Esse erro pode significar milhares
                    de reais pagos indevidamente nos últimos 5 anos.
                  </ParagraphSection>
                  <ParagraphSection className="font-bold text-2xl text-[#14532d]">
                    O que fazemos por você?
                  </ParagraphSection>
                  <ul className="font-semibold text-teal-700 space-y-2">
                    <li>
                      ✅ Analisamos todas as notas e cupons fiscais emitidos nos
                      últimos 5 anos.
                    </li>
                    <li>
                      ✅ Corrigimos a classificação tributária dos produtos. Com
                      isso, identificamos valores pagos a mais e protocolamos a
                      recuperação junto à Receita Federal.
                    </li>
                    <li>
                      ✅ Classificação correta de todos os documentos fiscais.
                    </li>
                    <li>
                      ✅ O cliente recebe os valores corrigidos pela taxa SELIC.
                    </li>
                    <li>
                      ✅ A partir daí, os impostos já passam a ser calculados
                      corretamente.
                    </li>
                  </ul>

                  <div className="mt-12">
                    <TitlePage title="Benefícios" description={[]} />
                    <div className="text-lg space-y-4 mt-6">
                      <ul className="font-semibold text-teal-700 space-y-2">
                        <li>✅ Recuperação de valores esquecidos.</li>
                        <li>✅ Processo administrativo, sem risco judicial.</li>
                        <li>✅ Direito consolidado pelo STJ.</li>
                        <li>✅ Melhoria no fluxo de caixa da empresa.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src={Img.src}
                alt="Imagem ilustrativa de dinheiro"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-teal-500 px-6 scroll-m-40 py-16" id="about">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl text-center font-extrabold text-white mb-12">
              Sobre a recuperação tributária
            </h2>
            <p className="font-bold text-white 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              A tributação do PIS e COFINS foi criada para concentrar a cobrança
              desses impostos no fabricante ou no importador, com alíquotas mais
              altas, de forma que o varejo e o atacado não precisem recolher
              novamente sobre a venda dos mesmos produtos.
            </p>
            <p className="font-bold text-white 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              Na prática, porém, muitas empresas do Simples Nacional continuam
              recolhendo indevidamente PIS/COFINS em suas operações, o que gera
              valores pagos a mais que podem ser recuperados. Essa recuperação é
              100% amparada pela legislação.
            </p>
            <p className="font-bold text-white 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              Além disso, o Superior Tribunal de Justiça (STJ) já firmou
              entendimento de que o PIS e a COFINS não podem ser cobrados
              novamente de atacadistas e varejistas em produtos monofásicos.
            </p>
            <p className="font-bold text-white 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              👉 Isso significa que sua empresa pode, de forma administrativa,
              simples e segura, recuperar os valores pagos a maior nos últimos 5
              anos, corrigidos pela taxa SELIC.
            </p>
          </div>
        </section>

        <section className="bg-[#f9fafb] py-16">
          <h2 className="text-2xl text-center font-extrabold text-teal-800 mb-2">
            Descubra se sua empresa tem tributos a recuperar. O diagnóstico é
            gratuito
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Entre em contato e solicite uma análise sem compromisso.
          </p>

          <div className="flex justify-center mb-8">
            <a
              href="https://wa.me/5519971027173"
              target="_blank"
              className="bg-[#25d366] hover:bg-teal-700 transition-colors text-white py-4 px-10 text-xl rounded-full shadow-lg flex items-center gap-3"
            >
              <FaWhatsapp /> Solicitar diagnóstico
            </a>
          </div>
        </section>

        <section className="bg-white py-16 scroll-m-40" id="cases">
          <h2 className="text-4xl text-center font-extrabold text-[#0f3c64] mb-12">
            Cases de Sucesso
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            <div className="bg-[#f9fafb] shadow-md rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#14532d]">
                Bares e Restaurantes
              </h3>
              <p className="text-3xl font-extrabold text-teal-700 my-4">10%</p>
              <p className="text-slate-600">em média de tributos recuperados</p>
            </div>

            <div className="bg-[#f9fafb] shadow-md rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#14532d]">Autopeças</h3>
              <p className="text-3xl font-extrabold text-teal-700 my-4">9%</p>
              <p className="text-slate-600">em média de tributos recuperados</p>
            </div>

            <div className="bg-[#f9fafb] shadow-md rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#14532d]">
                Depósitos de Bebidas
              </h3>
              <p className="text-3xl font-extrabold text-teal-700 my-4">14%</p>
              <p className="text-slate-600">em média de tributos recuperados</p>
            </div>

            <div className="bg-[#f9fafb] shadow-md rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#14532d]">Farmácias</h3>
              <p className="text-3xl font-extrabold text-teal-700 my-4">15%</p>
              <p className="text-slate-600">em média de tributos recuperados</p>
            </div>

            <div className="bg-[#f9fafb] shadow-md rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#14532d]">
                Postos de Combustíveis
              </h3>
              <p className="text-3xl font-extrabold text-teal-700 my-4">8%</p>
              <p className="text-slate-600">em média de tributos recuperados</p>
            </div>

            <div className="bg-[#f9fafb] shadow-md rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#14532d]">
                Supermercados
              </h3>
              <p className="text-3xl font-extrabold text-teal-700 my-4">12%</p>
              <p className="text-slate-600">em média de tributos recuperados</p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">
            *Os percentuais são médias observadas em análises realizadas. Cada
            empresa possui características próprias que podem aumentar ou
            diminuir o valor a recuperar.
          </p>
        </section>
      </div>
    </>
  );
}
