export interface SearchResponse {
    albums?: {
        items: AlbumInterface[]
    },
    tracks?: {
        items: TrackInterface[]
    },
    artists?: {
        items: ArtistInterface[]
    },
    categories?: {
        items: CategoryInterface[]
    },
    playlists?: {
        items: PlaylistInterface[]
    }
}

export interface AlbumInterface {
    album_type: string
    artists: ArtistInterface[]
    available_markets: string[]
    external_urls: {spotify: string}
    href: string
    id: string
    images: [
        {
            height: number
            url: string
            width: number
        }
    ]
    name: string
    tracks?: {
        items?: TrackInterface[]
    }
    label?: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

export interface TrackInterface {
    album: AlbumInterface
    artists: ArtistInterface[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: number
    external_ids: {
        isrc: string
    }
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images?: [
        {
            height: number
            url: string
            width: number
        }
    ]
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
}

export interface ArtistInterface {
    external_urls: {
        spotify: string
    }
    followers: {
        href: string,
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: [
        {
            height: number
            url: string
            width: number
        }
    ]
    name: string
    popularity: number
    type: string
    uri: string
}

export interface CategoryInterface {
    href: string
    icons: [
        {
            height: number
            url: string
            width: number
        }
    ]
    id: string
    name: string
}

export interface PlaylistInterface {
    collaborative: boolean
    description: string
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: [
        {
            height: number
            url: string
            width: number
        }
    ]
    name: string
    owner: {}
    primary_color: null
    public: null
    snapshot_id: string
    tracks: {
        items: [
            {
                primary_color: string
                track: TrackInterface
            }
        ]
    }
    type: string
    uri: string
}
