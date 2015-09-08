from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from app.views import *

partial_patterns = patterns('',
    url(r'^mainpage.html$', PartialGroupView.as_view(template_name='app/mainpage.html'), name='mainpage'),
)


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'prototype.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^admin/', include(admin.site.urls)),
    url(r'^index/', index, name='index'),
    url(r'^app_view/', include(partial_patterns, namespace='partials')),
)
