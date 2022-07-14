import React from 'react'
import SEO from '../components/SEO'
import '../styles/styles.css'

const FeedbackPage = () => (
  <>
    <SEO title="Feedback" />
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{
        __html: ` <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>Clerkent</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/WtRktRil?typeform-medium=embed-snippet"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>`,
      }}
    />
  </>
)

export default FeedbackPage