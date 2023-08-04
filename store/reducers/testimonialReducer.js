const ADD_TESTIMONIAL = 'ADD_TESTIMONIAL';
const DELETE_TESTIMONIAL = 'DELETE_TESTIMONIAL';
const UPDATE_TESTIMONIAL = 'UPDATE_TESTIMONIAL';
const LIST_TESTIMONIAL = 'LIST_TESTIMONIAL';
const CURRENT_TESTIMONIAL = 'CURRENT_TESTIMONIAL';


export const addTestimonial = (testimonial) => ({
    type: ADD_TESTIMONIAL,
    payload: testimonial,
  });
  
  export const updateTestimonial = (testimonial, id) => ({
    type: UPDATE_TESTIMONIAL,
    payload: { testimonial, id },
  });
  
  export const deleteTestimonial = (id) => ({
    type: DELETE_TESTIMONIAL,
    payload: { id },
  });
  
  export const getAllTestimonial = (testimonials) => ({
    type: LIST_TESTIMONIAL,
    payload: testimonials,
  });
  
  export const getTestimonial = (id) => ({
    type: CURRENT_TESTIMONIAL,
    payload: { id },
  });

  const initialState = {
    testimonials: [],
    currentTestimonial: {},
  };
  
  export const testimonialReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case LIST_TESTIMONIAL:
        return { ...state, testimonials: payload };
        
      case CURRENT_TESTIMONIAL:
        return {
          ...state,
          currentTestimonial: state.testimonials.find(
            (testimonial) => testimonial.id === payload.id
          ),
        };
  
      case ADD_TESTIMONIAL:
        return { ...state, testimonials: [...state.testimonials, payload] };
  
      case UPDATE_TESTIMONIAL:
        return {
          ...state,
          testimonials: state.testimonials.map((testimonial) =>
            testimonial.id == payload.id ? payload.testimonial : testimonial
          ),
        };
  
      case DELETE_TESTIMONIAL:
        return {
          ...state,
          testimonials: state.testimonials.filter(
            (testimonial) => testimonial.id !== payload.id
          ),
        };
  
      default:
        return state;
    }
  };