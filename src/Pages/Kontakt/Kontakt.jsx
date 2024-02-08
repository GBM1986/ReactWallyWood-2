import { ContentWrapper } from '../../Components/ContentWrapper/ContentWrapper';
import { useForm } from 'react-hook-form';
import React from 'react';

export const Kontakt = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
  
    const onSubmit = async data => {
        console.log(data);
        alert('Successfully Submitted');
        reset();
    };

    return (
        <ContentWrapper>
            <div className="max-w-[1200px] mx-auto">   
                <div className=" bg-white sm:items-center sm:pt-0">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="overflow-hidden">
                            {/* Form */}
                            <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-20">
                                <form className="dark:bg-gray-800 sm:rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight mb-4 text-orange ">
                                        Kontakt Os
                                    </h1>
                                    {/* Form fields */}
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="">Dit navn:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Navn"
                                            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                            {...register("name", { required: true, pattern: /^[A-Za-z ]+$/i })}    
                                        />
                                        {errors.name && errors.name.type === 'required' && <span>Du skal udfylde feltet!</span>}
                                        {errors.name && errors.name.type === 'pattern' && <span className='text-red'>Der må kun være bogstaver i et navn!</span>}
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="email" className="">Din email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                            {...register("email", { required: true, pattern: /^[a-zA-Z\s0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                                        />
                                        {errors.email && errors.email.type === 'required' && <span>Du skal udfylde feltet!</span>}
                                        {errors.email && errors.email.type === 'pattern' && <span>Du skal indtaste en gyldig email!</span>}
                                    </div>
                                    {/* Comment field */}
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="comment" className="">Din besked:</label>
                                        <textarea
                                            name="comment"
                                            id="comment"
                                            placeholder="Besked"
                                            rows={8}
                                            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none resize-none"
                                            {...register('comment', { required: true })}
                                        ></textarea>
                                        {errors.comment && <span>Du skal udfylde feltet</span>}
                                    </div>
                                    {/* Add other input fields */}
                                    <button
                                        type="submit"
                                        className="border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};
