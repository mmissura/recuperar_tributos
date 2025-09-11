'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { TitlePage } from './(components)/TitlePage';
import Img from '../../public/img4.png';
import Img1 from '../../public/img3.png';
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

        <h1 className="text-center my-12 font-bold text-4xl text-[#14532d]">
          Você sabia que a sua empresa pode ter tributos a recuperar?
        </h1>

        <div className="flex justify-center mt-32">
          <a
            href="https://wa.me/5519971027173"
            target="_blank"
            className="bg-[#25d366] hover:bg-teal-700 transition-colors text-white py-4 px-10 text-xl rounded-full shadow-lg flex items-center gap-3 -mt-10 z-10 relative mb-12"
          >
            <FaWhatsapp /> Quero saber mais
          </a>
        </div>

        <section className="bg-white px-6 scroll-m-40" id="services">
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
                  <ul className="font-semibold text-teal-700">
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
                    <div className="mt-12">
                      <TitlePage title="Benefícios" description={[]} />
                      <div className="text-lg space-y-4 mt-6">
                        <ul className="font-semibold text-teal-700">
                          <li>✅ Recuperação de valores esquecidos.</li>
                          <li>
                            ✅ Processo administrativo, sem risco judicial.
                          </li>
                          <li>✅ Direito consolidado pelo STF.</li>
                          <li>✅ Melhoria no fluxo de caixa da empresa.</li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <img
                src={Img.src}
                alt="Imagem de dinheiro perdido"
                className="hidden md:block w-fullh-auto"
              />

              <img
                src={Img.src}
                alt="Imagem de dinheiro perdido"
                className="md:hidden w-full h-auto"
              />
            </div>

            {/* <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src={Img1.src}
                alt="Imagem de dinheiro perdido"
                className="hidden md:block w-full h-auto"
              />

              <img
                src={Img1.src}
                alt="Imagem de dinheiro perdido"
                className="md:hidden w-full h-auto"
              /> */}
            {/* <div>
                <TitlePage title="Benefícios" description={[]} />
                <div className="text-lg space-y-4 mt-6">
                  <ul className="font-semibold text-teal-700">
                    <li>✅ Recuperação de valores esquecidos.</li>
                    <li>✅ Processo administrativo, sem risco judicial.</li>
                    <li>✅ Direito consolidado pelo STJ.</li>
                    <li>✅ Melhoria no fluxo de caixa da empresa.</li>
                  </ul>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </section>

        <section className="bg-white px-6 scroll-m-52" id="about">
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-5xl text-center font-extrabold text-[#14532d] mb-12">
              Sobre a recuperação tributária
            </h2>
            <p className="font-bold text-slate-700 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              {' '}
              A tributação do PIS e COFINS foi criada para concentrar a cobrança
              desses impostos no fabricante ou no importador, com alíquotas mais
              altas, de forma que o varejo e o atacado não precisem recolher
              novamente sobre a venda dos mesmos produtos.
            </p>
            <p className="font-bold text-slate-700 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              Na prática, porém, muitas empresas do Simples Nacional continuam
              recolhendo indevidamente PIS/COFINS em suas operações, o que gera
              valores pagos a mais que podem ser recuperados. Essa recuperação é
              100% amparada pela legislação.
            </p>
            <p className="font-bold text-slate-700 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              Além disso, o Supremo Tribunal Federal (STF) já firmou
              entendimento de que o PIS e a COFINS não podem ser cobrados
              novamente de atacadistas e varejistas em produtos monofásicos.
            </p>{' '}
            <p className="font-bold text-slate-700 2xl:text-xl xl:text-xl text-lg mb-6 text-justify">
              👉 Isso significa que sua empresa pode, de forma administrativa,
              simples e segura, recuperar os valores pagos a maior nos últimos 5
              anos, corrigidos pela taxa SELIC.
            </p>{' '}
          </div>
        </section>

        <section className="bg-white py-10">
          <h2 className="text-2xl text-center font-extrabold text-teal-800 mb-2">
            Descubra se sua empresa tem tributos a recuperar. O diagnóstico é
            gratuito
          </h2>
          <h2 className="text-2xl text-center font-extrabold text-teal-800 mb-12">
            Entre em contato conosco.
          </h2>

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

        <section className="bg-white py-10">
          <h2 className="text-2xl text-center font-extrabold text-teal-800 mb-2">
            Cases de sucesso
          </h2>
          <h2 className="text-2xl text-center font-extrabold text-teal-800 mb-12">
            Inserir os cases de sucesso e % de recuperação para cada segmento
          </h2>
        </section>
      </div>
    </>
  );
}
