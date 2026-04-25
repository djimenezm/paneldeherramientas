import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = `${siteConfig.name} - ${siteConfig.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '56px',
          background: 'linear-gradient(145deg, #042f2e 0%, #0f766e 58%, #7dd3c7 100%)',
          color: '#f8fbff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '68%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.16)',
                border: '1px solid rgba(255,255,255,0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 800,
              }}
            >
              PH
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '34px',
                  fontWeight: 700,
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '22px',
                  color: 'rgba(248,251,255,0.75)',
                }}
              >
                Inventario publico de apps para freelancers y autonomos
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '760px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '68px',
                fontWeight: 800,
                lineHeight: 1.05,
              }}
            >
              Todas las herramientas del ecosistema en un solo panel
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '28px',
                lineHeight: 1.35,
                color: 'rgba(248,251,255,0.8)',
              }}
            >
              Facturacion, presupuestos, mantenimiento web y landing pages reunidos en una unica web.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '14px',
            }}
          >
            {['4 herramientas', 'Apps pequenas', 'En crecimiento'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  padding: '12px 18px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.14)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  fontSize: '22px',
                  color: '#f8fbff',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: '26%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {[
            ['Cuanto Facturar', 'Objetivo mensual, cuota, IRPF, IVA y tarifa por hora'],
            ['Cuanto Presupuestar', 'Presupuestos cerrados con buffer y margen'],
            ['Retainers y landings', 'Mantenimiento mensual y precios de landing page'],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '24px',
                borderRadius: '24px',
                background: 'rgba(7, 22, 36, 0.2)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 10px 28px rgba(6, 18, 31, 0.16)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#99f6e4',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '24px',
                  lineHeight: 1.35,
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
