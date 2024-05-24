import person from '../../../assets/person.png'

const Login = () => {

  return (
    <div className='w-52 mx-3 h-full flex justify-center items-center bg-sky-800 min-w-40'>
      <a href="" className='flex items-center gap-8'>
        <img src={person} alt="person" className='h-7 invert' />
        <div className=''>
          <h4 className='text-base leading-4'>FAZER LOGIN</h4>
          <h5 className='text-xs '>OU INICIAR CADASTRO</h5>
        </div>
      </a>
    </div>

  )
}

export default Login