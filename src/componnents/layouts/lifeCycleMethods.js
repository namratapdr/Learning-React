import React,{Component} from 'react'
/**
 * Life Cycle Methods
 * render is like changing clothes , you call it whenever you want to change your clothes
 * render() is sometimes listed as a life Cycle method
 * https://www.w3schools.com/REACT/react_lifecycle.asp
 * Constructor() is also a life cycle method
 * Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
 * The three phases are: Mounting, Updating, and Unmounting.
 * 
 * 
  */
class LcMethods extends Component {

    componentDidMount(){
        /**
         * This life Cycle Mtehod is like saying you were just born
         * it runs when it's first declared 
         * and unlike render() React doesn't call this method whenever something is updated
         * 
         * This method can be useful fro when a data is retrieved from an Api before it's called
         * when the data mounts this method is called
         */
    }
    componentWillReceiveProps(nextProps){
        //this life cycle method is used as you can tell from the name 
        //it recieves props and most of the time used to checked if the state of the props is changed or not
        //then some calculation is done based on that data
        //Or maybe  setState is invoked
        //this is won't be a part of react any longer after 16.3
    }
    shouldComponentUpdate(nextProps , nextState){
        /**
         * This LC method is used for determining whther the component should update or not
         * the render() method is updated sometimes even if there aren't any changes in the app
         * that can be very bad fro optimisation of the complex apps
         * That's why this method is used to consider if this component should even update or not
         * based on the arguments of props and state it recieves.
         */
    }
    componentWillUnmount(){
        /**
         * This method is used to celan up your component code 
         * before it disappears (like when it's gone after a scroll)
         * (removeEventListener type functionalities are used in this)
         */
    }
    /**
     * Some LC Methods which were deprecated in React
     *  componentWillRecievProps()
     *  componentWillMount()
     *  componentWillUpdate()
     */
    //Some new LC Methods in the place of the previous ones.(You can say in the place of the prevState XD)
    
    static getDerivedStateFromProps(props,state){
        //static is used because it's a static method
        //returns the new , updated state based upon the props
        //but the react team discourages the use of this method as it raises weird bugs 
    }

    getSnapshotBeforeUpdate(){
        /**
         * Create a back up of some current state of code before it gets updated
         */
    }

    render(){
       return (
           <div>Code goes here</div>
       )
    }
}
export default LcMethods