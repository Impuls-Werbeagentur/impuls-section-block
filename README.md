# impuls-section-block
Registers a Section Block for the Gutenberg Block Editor


How To Use:
- Download zip-file
- Upload the extracted zip to your wordpress plugin directory
- Activate the Plugin in your plugins screen
- Add a "Section" Block in your Block Editor

The Section Block supports: 
- Background Color 
- Text Color
- Background Image
- Background image Size
- Background image position: fixed
- InnerBlocks 

If you want to put the section to align full, you will need to style the InnerContents div, maybe like this:

.wp-block-impuls-additional-blocks-section.alignfull {
  width:100%;
}

.wp-block-impuls-additional-blocks-section .InnerContent {
  max-width:1200px;
  margin:0 auto;
}
