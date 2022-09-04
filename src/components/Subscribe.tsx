import React from 'react'

const Subscribe = ({ className = `` }) => {
  return (
    <section className={`max-w-screen-md mx-auto py-4 px-2 ${className}`}>
      <p>
        Pop your email address below if you'd like
        to receive an email once in a few weeks about
        the latest changes and upcoming features
      </p>
      <form
        className="my-2 flex items-center"
        action="https://www.getrevue.co/profile/clerkent/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <input className="p-2 w-full flex-auto border border-solid border-slate-600 rounded-l" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
        <input
          className="py-2 px-4 my-4 bg-slate-800 border border-solid border-slate-800 text-white rounded-r outline-none cursor-pointer"
          type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"
        />
      </form>
      <div className="text-sm my-4">
        By subscribing, you agree with Revue's&nbsp;
        <a target="_blank" href="https://www.getrevue.co/terms" rel="noreferrer">Terms of Service</a>
        &nbsp;and&nbsp;
        <a target="_blank" href="https://www.getrevue.co/privacy" rel="noreferrer">Privacy Policy</a>.&nbsp;
        Your email address will only be used for
        this purpose and will be deleted if you
        unsubscribe (which you can do at any time).
      </div>
    </section>
  )
}

export default Subscribe