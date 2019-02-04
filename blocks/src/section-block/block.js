/**
 * BLOCK: BG Container
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, createBlock } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, InspectorControls, PanelColorSettings, withColors, MediaUpload, getColorClassName, AlignmentToolbar, BlockControls } = wp.editor;
const { ToggleControl } = wp.components;
//const {} = wp.blocks;

/**
 * Register: Impuls Section Block
 *
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'impuls-additional-blocks/section', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Section' ), // Block title.
	icon: 'align-full-width', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Row' ),
	],
	attributes: {
		backgroundColor: {
			type: 'string',
		},
		mediaURL: {
			type: 'string',
		},
		textColor:{
			type: 'string',
		},
		bgImageCover: {
			type: 'boolean',
			default: false,
		},
		fixedBGImage: {
			type: 'boolean',
			default: false,
		},
		alignment: {
            type: 'string',
        },
	},
	supports: {
		align: ['full'],
		anchor: true
    },
	
	
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: withColors( 'backgroundColor', 'textColor' )(function( props ) {
		const { setAttributes,
		attributes,
        className,
		setBackgroundColor,
		backgroundColor,
		setTextColor,
		textColor,
		alignment } = props;
		
        const { mediaURL,bgImageCover,fixedBGImage } = attributes;
		const backgroundClass = (className ? className : '') + 
								(alignment?' '+ alignment:'') + 
								(bgImageCover ? ' background-image-size-cover' : '') +
								(textColor? ' ' + textColor.class+' has-text-color':' has-no-text-color')+
								(backgroundColor ? ' ' + backgroundColor.class + ' has-background-color':' has-no-background-color') + 
								(mediaURL ? ' has-background-image' : ' has-no-background-image') +
								(fixedBGImage ? ' fixed-background-image': '');
        function onImageSelect(imageObject) {
			setAttributes({
				mediaURL: imageObject.sizes.full.url
			});
		}
        function onImageRemove(){
            setAttributes({
                mediaURL:""
            });
		}
		function setbgImageCover(){
			const { attributes} = props;
			setAttributes( { 
				bgImageCover: !attributes.bgImageCover
			} );
		}
		function setfixedBGImage(){
			const { attributes} = props;
			setAttributes( { 
				fixedBGImage: !attributes.fixedBGImage
			} );
		}
		function onChangeAlignment( newAlignment ) {
            setAttributes({
                 alignment: newAlignment 
            });
        }
		function getbgImageCoverHelp( checked ) {
			return checked ? __( 'The Background Image will cover the whole section.' ) : __( 'The Background Image will repeat itself' );
		}
		return ([
            <InspectorControls>
				<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color' ),
							},
						] }
					/>
				<div>
					<strong>Please choose the Background Image:</strong>
					<MediaUpload
						onSelect={onImageSelect}
						allowedTypes={"image"}
						value={mediaURL} 
						render={({ open }) => (
							<button onClick={open}>
								Upload Image!
							</button>
						)}
					/>
                    <button onClick={onImageRemove}>
                        remove Background Image
                    </button>
				</div>
				<ToggleControl
							label={ __( 'Background size' ) }
							checked={ !! bgImageCover }
							onChange={ setbgImageCover }
							help={ getbgImageCoverHelp }
				/>
				<ToggleControl
							label={ __( 'Background fixed' ) }
							checked={ !! fixedBGImage }
							onChange={ setfixedBGImage }
				/>
			</InspectorControls>,
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>,
			<div 
				className={ backgroundClass} 
				style={{
					backgroundImage: (mediaURL ? `url(${mediaURL})` : 'none'),
					backgroundColor: (backgroundColor ? backgroundColor.color: ''),
					color: (textColor? textColor.color : 'inherit')
				}}
			>
                <div className={'InnerContent'}>
                    <InnerBlocks />
                </div>
			</div>
        ]);
	}),

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		const { attributes , className } = props;
		const { mediaURL,backgroundColor,textColor, bgImageCover,alignment,fixedBGImage} = props.attributes;
		const backgroundClass = (className ? className : '') + 
								(alignment?' '+alignment:'') + 
								(bgImageCover ? ' background-image-size-cover' : '') +
								(textColor ? ' has-' + textColor +'-text-color has-text-color':' has-no-text-color')+
								(backgroundColor ? ' has-'+ backgroundColor + '-background-color has-background-color':' has-no-background-color') + 
								(mediaURL ? ' has-background-image' : ' has-no-background-image') +
								(fixedBGImage ? ' fixed-background-image': '');
		return (
			<div 
				className={ backgroundClass  }
				style={{
					backgroundImage: (mediaURL ? `url(${mediaURL})`: 'none'),
				}}
			>
                <div className={'InnerContent'}>
				    <InnerBlocks.Content />
                </div>
			</div>
		);
	},
} );