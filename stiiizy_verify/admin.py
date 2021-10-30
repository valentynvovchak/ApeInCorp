from django.contrib import admin

from import_export.admin import ImportExportActionModelAdmin
from import_export import resources
from import_export import fields
from import_export.widgets import ForeignKeyWidget

from stiiizy_verify.models import QR


class SerialResource(resources.ModelResource):
    class Meta:
        model = QR
        fields = ('serial',)
        export_order = ('serial',)
        import_id_fields = ('serial',)


class QRAdmin(ImportExportActionModelAdmin):
    resource_class = SerialResource

    list_display = ['id', 'serial', 'verifications', 'created_at', 'first_verified']
    list_display_links = ['serial']
    search_fields = ('serial',)
    date_hierarchy = 'first_verified'


admin.site.register(QR, QRAdmin)
