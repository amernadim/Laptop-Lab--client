import React from 'react';

const WelcomeDash = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-bold text-5xl dark:text-gray-600">
				<span className="sr-only">Welcome</span>Welcome
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">To Your Dashboard</p>
		</div>
	</div>
</section>
  );
};

export default WelcomeDash;