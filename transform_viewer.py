import os

source_path = '/Users/jacinth/Development/VoltAero Website/voltaero-website/app/projects/[id]/ProjectViewer.tsx'
dest_path = '/Users/jacinth/Development/VoltAero Website/voltaero-website/app/products/[id]/ProductViewer.tsx'

with open(source_path, 'r') as f:
    content = f.read()

# Replace strings
content = content.replace('/projects', '/products')
content = content.replace('Projects', 'Products')
content = content.replace('ProjectDetailsClient', 'ProductDetailsClient')
content = content.replace('EnhancedProject', 'any')  # we bypass typing for the placeholder data locally for now, or just leave it
content = content.replace('ProjectFeature', 'any')
content = content.replace('project', 'product')
content = content.replace('Project', 'Product')
content = content.replace('droneData', 'productData')
content = content.replace('getPlaceholderData(product)', 'product') # since our product is already enhanced

with open(dest_path, 'w') as f:
    f.write(content)
