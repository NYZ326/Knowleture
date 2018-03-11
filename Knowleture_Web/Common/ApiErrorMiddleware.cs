using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Knowleture_Web.Common
{
    public class ApiErrorMiddleware
    {
        private readonly RequestDelegate _next;

        public ApiErrorMiddleware(RequestDelegate next)
        {
            this._next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError;
            string message = String.Empty;

            var exceptionType = exception.GetType();

            if (exceptionType == typeof(UnauthorizedAccessException))
            {
                code = HttpStatusCode.Unauthorized;
                message = "Unauthorized Access.";
            }
            else if (exceptionType == typeof(NotImplementedException))
            {
                code = HttpStatusCode.NotImplemented;
                message = "A server error occurred.";
            }
            else if (exceptionType == typeof(KeyNotFoundException))
            {
                code = HttpStatusCode.NotFound;
                message = "Content or value not found.";
            }
            else
            {
                code = HttpStatusCode.InternalServerError;
                message = "A server error occurred.";
            }

            var result = JsonConvert.SerializeObject(new { error = exception.Message });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }
}
