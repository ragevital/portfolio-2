const initialState = {
    testimonials: [],
  };
  
  const testimonialReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TESTIMONIAL':
        return {
          ...state,
          testimonials: [...state.testimonials, action.payload],
        };
      case 'EDIT_TESTIMONIAL':
        const { index, testimonial } = action.payload;
        const updatedTestimonials = [...state.testimonials];
        updatedTestimonials[index] = testimonial;
        return {
          ...state,
          testimonials: updatedTestimonials,
        };
      default:
        return state;
    }
  };
  
  export default testimonialReducer;
  