using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
using System.Threading;

namespace nodetest
{
    public class NonBlockingHandler : IHttpAsyncHandler
    {
        public bool IsReusable { get { return true; } }

        public IAsyncResult BeginProcessRequest(HttpContext context, AsyncCallback cb, object extraData)
        {
            return this.ProcessRequestAsync(context)
                       .ContinueWith(task => cb(task));
        }

        public void EndProcessRequest(IAsyncResult result)
        {
            IDisposable disposable = result as IDisposable;

            if (disposable != null)
            {
                disposable.Dispose();
            }
        }

        public void ProcessRequest(HttpContext context)
        {
            this.ProcessRequestAsync(context).Wait();
        }

        private Task ProcessRequestAsync(HttpContext context)
        {
            var quoteService = new QuoteServiceClient("http://localhost:8087");

            return quoteService.GetQuoteAsync()
                               .ContinueWith(quoteTaks => {
                                   context.Response.Write(String.Format("A quote from <b>{0}</b><br><h2>{1}</h2>", quoteTaks.Result.Author, quoteTaks.Result.QuoteText));                    
                               });
        }
    }
}
