import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer udsEa04WsCO6y0AxKAl7L24zx2CyqeuqaXkGArjatwQi9dvVdo4PdYanaeJN7nY7Qe3qCGe0Dl7XFeTjV8fTFBAt89x1YOe7g3RVRfiAhLgFhC6vZfPPRkT4q0hbXnYx'
    }
});