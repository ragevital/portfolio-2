'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addTestimonial, getTestimonial, deleteTestimonial } from "@/store/reducers/testimonialReducer";

const TestimonialList = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const testimonials = useSelector(state => state.testimonial.testimonials);

    const [state, setState] = useState({
        // Initial state for testimonial form fields
        // Adjust these fields according to your requirements
        author: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    function goToEdit(id) {
        dispatch(getTestimonial(id));
        router.push(`/edit-testimonial/${id}`);
    }

    function deletedTestimonial(id) {
        dispatch(deleteTestimonial(id));
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addTestimonial({ ...state, id: testimonials.length + 1 }));
        setState({
            author: "",
            content: "",
        });
    }

    return (
        <>
            {testimonials.length ? (
                <>
                <h1 className="text-2xl font-bold mb-4">List of Testimonials</h1>
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-center">Id</th>
                            <th className="px-4 py-2 text-center">User</th>
                            <th className="px-4 py-2 text-center">Author</th>
                            <th className="px-4 py-2 text-center">Content</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map(testimonial => (
                            <tr key={testimonial.id} className="border-b">
                                <td className="px-4 py-2 text-center">{testimonial.id}</td>
                                <td className="px-4 py-2 text-center">
                                    <div className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM19 21v-2a4.978 4.978 0 00-2-3.874M5 21v-2a4.978 4.978 0 012-3.874"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a8.002 8.002 0 00-6-7.745V3h6v2.255A8.002 8.002 0 0015 13z"></path>
                                        </svg>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">{testimonial.author}</td>
                                <td className="px-4 py-2 text-center">{testimonial.content}</td>
                                <td className="px-4 py-2 text-center">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        onClick={() => goToEdit(testimonial.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => deletedTestimonial(testimonial.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
            
            ) : null}

            <div className="mt-5">
                <h2 className="text-xl font-bold mb-3">Add a Testimonial</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                            Author
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="author"
                            id="author"
                            value={state.author}
                            onChange={handleChange}
                            placeholder="Enter author"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="content"
                            id="content"
                            value={state.content}
                            onChange={handleChange}
                            placeholder="Enter content"
                        />
                    </div>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default TestimonialList;
