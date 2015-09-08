# -*- coding: utf-8 -*-
from django.http import HttpResponse, HttpResponseForbidden, StreamingHttpResponse
from django.shortcuts import render_to_response
from django.views.generic.base import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.template import RequestContext
from djangular.core.urlresolvers import urls_by_namespace


@csrf_exempt
def index(request):
    my_partials = urls_by_namespace('partials')
    return render_to_response('app/index.html',dict(my_partials=my_partials), RequestContext(request))



class PartialGroupView(TemplateView): #Angular router
    def get_context_data(self, **kwargs):
        context = super(PartialGroupView, self).get_context_data(**kwargs)
        # update the context
        return context    
