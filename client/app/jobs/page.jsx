import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const fetchJobs = async () => {
	let job = await fetch('http://localhost:1337/api/jobs?populate=*')
	return job.json()
}

async function JobPage () {
	let jobs = await fetchJobs()
	
	// Minimising the paragrahps on the card component
	const MAX_LENGTH = 250

    if (!jobs.data) return notFound

	return (
		<>
			<section className='w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5'>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
					{jobs.data.map((job) => (
						<Link key={job.key} href={'/jobs/' + job.id} legacyBehavior>
							<div>
								<h2 className='mb-2 text-xl font-bold leading-snug text-gray-900'>
									<a
										href='#'
										className='text-gray-900 hover:text-purple-700'>
										{job.attributes.vacancy}
									</a>
								</h2>
								<p className='mb-4 text-sm font-normal text-gray-600'>
									{job.attributes.description.substring(
										0,
										MAX_LENGTH
									) + ' ...'}
								</p>
								<a
									className='flex items-center text-gray-700'
									href='#'>
									<div className='avatar'>
										<img
											className='flex-shrink-0 object-cover object-center w-12 h-12 rounded-full'
											src={`http://localhost:1337${job.attributes.image.data.attributes.url}`}
											alt={
												'Photo of ' +
												job.attributes.recruiter
											}
										/>
									</div>
									<div className='ml-2'>
										<p className='text-sm font-semibold text-gray-900'>
											{job.attributes.recruiter}
										</p>
										<p className='text-sm text-gray-600'>
											{job.attributes.email}
										</p>
									</div>
								</a>
							</div>
						</Link>
					))}
				</div>

				{/* btns */}
				<div className='flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row'>
					<Link href='/'>
						<a
							href='#'
							className='px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto'>
							Home
						</a>
					</Link>
				</div>
			</section>
		</>
	)
}

export default JobPage
