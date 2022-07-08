import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
		<div className="min-h-screen bg-[#132a13]">
			<Component {...pageProps} />
		</div>
	);
    
}

export default MyApp
