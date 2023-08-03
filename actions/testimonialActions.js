export const addTestimonial = (testimonial) => {
    return {
      type: 'ADD_TESTIMONIAL',
      payload: testimonial,
    };
  };
  
  export const editTestimonial = (index, testimonial) => {
    return {
      type: 'EDIT_TESTIMONIAL',
      payload: { index, testimonial },
    };
  };
  