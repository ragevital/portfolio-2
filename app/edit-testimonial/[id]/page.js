'use client'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTestimonial } from "@/store/reducers/testimonialReducer";
import { useRouter } from "next/navigation";

const EditTestimonial = ({ params }) => {
    const dispatch = useDispatch();
    const { id } = params;
    const router = useRouter();
    const testimonial = useSelector(state => state.testimonial.currentTestimonial);
    
    const [state, setState] = useState({
        author: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        if (testimonial) setState(testimonial);
    }, [testimonial]);

    function submit(event) {
        event.preventDefault();
        id && dispatch(updateTestimonial(state, id));
        router.push("/testimonial-list");
    }

    return (
        <div className="mt-5">
            <h2 className="text-xl font-bold mb-3">Edit Testimonial</h2>
            <form onSubmit={submit} className="bg-white p-6 rounded shadow-md">
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
    );
};

export default EditTestimonial;
