import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question'>
            <div className='first-question'>
            <h3>1. What is context API?</h3>
            <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>
            <div className='second-question'>
                <h3>2. What is semantic tag?</h3>
                <p>Answer: HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.
Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.
Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the  to describe information using a table, programmers would use them to position other elements on a page.
</p>
            </div>
        </div>
    );
};

export default Blogs;