import MainBg from '../MainBg'
import coke from '../../assets/coke.png'
import SocialIcons from './SocialIcons'




const Footer = () => {
  return (
    <>
      <footer className='hidden sm:flex justify-center mt-10 py-12 bg-stone-300'>
        <MainBg col>
          <div className='flex flex-col lg:px-10  font-pathway-gothic '>

            <ul className='flex flex-wrap font-semibold text-slate-600 mb-16'>
              <li className='border-e border-black pr-8 mb-1'><a href="">Internacional</a></li>
              <li className='border-e border-black px-8'><a href="">Sobre a Pizza</a></li>
              <li className='border-e border-black px-8'><a href="">Políticas de Privacidade</a></li>
              <li className='border-e border-black px-8'><a href="">Seja um Franqueado</a></li>
              <li className='border-e border-black px-8'><a href="">Fale Conosco</a></li>
              <li className='px-8'><a href="">Termos de Uso</a></li>

            </ul>

            <div className='flex items-center gap-8 mb-16'>
              <div>
                <SocialIcons />
              </div>
              <img src={coke} alt="coke" />
            </div>

            <div className='flex flex-col gap-3 leading-5   text-sm'>
              <p>Serviço disponível nas áreas de entrega Domino´s Pizza, todos os dias, de acordo com o horário de funcionamento de cada loja. A Domino´s Pizza Brasil se reserva no direito de alterar ou encerrar as ofertas sem aviso prévio. Todas as promoções expostas não são cumulativas entre si ou com outras promoções e descontos. Cobramos taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN. Alérgicos: todos os nossos produtos contém ou podem conter traços de Trigo, Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada loja. Imagens meramente ilustrativas. Consulte se sua loja de preferência pratica a promoção escolhida Em caso de dúvidas, consulte nosso SAC:<a href="" className='text-sky-700 font-semibold'>example@clone.com.br</a>.
                <br />
                <br />

                *Preços "a partir de" podem sofrer pequenas variações de acordo com a região da loja. Confirme o preço no carrinho de compras antes de confirmar seu pedido.
                <br />
                <br />
                DOMINO´S PIZZA BRASIL, Av. das Américas, 500 - Bloco 7 – 3º andar – Barra da Tijuca, Rio de Janeiro/RJ - 22640-100</p>

              <p>S.A.C: Dúvidas, reclamações, sugestões e / ou elogios envie um e-mail para: <a href="" className='text-sky-700 font-semibold'>example@clone.com.br</a>.</p>
              <p>Informações sobre o uso de dados pessoais e pedidos de descadastro do banco de dados, <a href="" className='text-sky-700 font-semibold'>clique aqui</a> - Encarregado de Dados.</p>
            </div>

          </div>
        </MainBg>
      </footer>

      <footer className='sm:hidden flex justify-center mt-10 py-12 bg-stone-300'>
        <MainBg col>
          <div className=' flex flex-col px-12  font-pathway-gothic '>

            <ul className='grid grid-cols-2 gap-4 text-lg font-semibold  text-slate-600 mb-16 leading-5'>
              <li className=''><a href="">Internacional</a></li>
              <li className=''><a href="">Seja um Franqueado</a></li>
              <li className=''><a href="">Sobre a Pizza</a></li>
              <li className=''><a href="">Fale Conosco</a></li>
              <li className=''><a href="">Políticas de Privacidade</a></li>
              <li className=''><a href="">Termos de Uso</a></li>

            </ul>

            <div className='flex flex-wrap items-center gap-8 mb-16'>
              <SocialIcons />
              <img src={coke} alt="coke" />
            </div>

            <div className='flex flex-col gap-3 leading-5 text-gray-600 text-base font-semibold'>
              <p>Serviço disponível nas áreas de entrega Domino´s Pizza, todos os dias, de acordo com o horário de funcionamento de cada loja. A Domino´s Pizza Brasil se reserva no direito de alterar ou encerrar as ofertas sem aviso prévio. Todas as promoções expostas não são cumulativas entre si ou com outras promoções e descontos. Cobramos taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN. Alérgicos: todos os nossos produtos contém ou podem conter traços de Trigo, Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada loja. Imagens meramente ilustrativas. Consulte se sua loja de preferência pratica a promoção escolhida Em caso de dúvidas, consulte nosso SAC:<a href="" className='text-sky-700 font-semibold'>example@clone.com.br</a>.
                <br />
                <br />

                *Preços "a partir de" podem sofrer pequenas variações de acordo com a região da loja. Confirme o preço no carrinho de compras antes de confirmar seu pedido.
                <br />
                <br />
                DOMINO´S PIZZA BRASIL, Av. das Américas, 500 - Bloco 7 – 3º andar – Barra da Tijuca, Rio de Janeiro/RJ - 22640-100</p>

              <p>S.A.C: Dúvidas, reclamações, sugestões e / ou elogios envie um e-mail para: <a href="" className='text-sky-700 font-semibold'>example@clone.com.br</a>.</p>
              <p>Informações sobre o uso de dados pessoais e pedidos de descadastro do banco de dados, <a href="" className='text-sky-700 font-semibold'>clique aqui</a> - Encarregado de Dados.</p>
            </div>

          </div>
        </MainBg>
      </footer>
    </>
  )
}

export default Footer